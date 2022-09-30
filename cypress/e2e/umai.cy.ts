describe('Reservation happy usecases', () => {
  beforeEach(()=>{
    
    cy.visit('https://gthewhite.letsumai.com/widget/kwc-automated')
    cy.getByClass('um-tenDateSelector--btn-content').eq(2).click()
  })

  it('Make reservation for two people', () => {

    cy.getByID('um-reservation-party-size').click().find('div').contains('2 people').click()
    cy.getByID('timeslot-morning-4').click()
    cy.getByClass('um-user-reserv-details-section--content').should("exist").contains("10:00 AM")
    cy.getByID('um-field--first-name').type('Aleeza')
    cy.getByID('um-field--last-name').type('Test1')
    cy.getByID('um-field--phone-number').clear().type('+923056787374')
    cy.getByID('um-field--email').type('aleexa.hassan@gmail.com')
    cy.getByID('um-field--special-request').type('test request')
     //cy.getByID('um-tags-add-Dietary restrictions').click()
    cy.getByID('um-field-checkbox').click()
    cy.getByID('ums-confirm-reservation-details-button').click()
    cy.getByClass('um-confirmation__info').should("exist").contains("We've sent you an email with all the information,In case you cannot find it, please check your junk mail folder.")

  })

  it('Make reservation for 6 people with payment details',()=>{
    cy.getByID('um-reservation-party-size').click().find('div').contains('6 people').click()
    cy.getByID('timeslot-morning-4').click()
    cy.getByClass('um-user-reserv-details-section--content').should("exist").contains("10:00 AM")
    cy.getByID('um-field--first-name').type('Aleeza')
    cy.getByID('um-field--last-name').type('Test1')
    cy.getByID('um-field--phone-number').clear().type('+923056787374')
    cy.getByID('um-field--email').type('aleexa.hassan@gmail.com')
    cy.getByID('um-field--special-request').type('test request')
    cy.getByID('um-field-checkbox').click()
    cy.getByID('ums-proceed-to-add-payment-details-button').click()

    //payment details
    cy.getByClass('StripeElement').type('Test XYZ')
    cy.getWithinIframe('[name="cardnumber"]').type('4242424242424242')
    cy.getWithinIframe('[name="exp-date"]').type('1232')
    cy.getWithinIframe('[name="cvc"]').type('987')
    cy.getByID('ums-confirm-reservation-button').click()
    cy.getByClass('um-user-reserv-details-section--content').should('exist').contains('confirmed')
    cy.getByID('ums-done-button').click()
  })

  it('Subscribe for waitlist for 11th October for 2 people',()=> {
    cy.getByClass('um-waitlist__button').click()
    cy.get('.um-wailist-filter--wrapper > .um-filters > .um-filters__form > .um-filters__selection > :nth-child(2) > #um-reservation-date-picker').click()
    cy.get('[aria-label="Not available. Tuesday, 11th October 2022"] > .day-content').click()
    
    cy.getByID('start_time').select('5:00 PM')
    cy.getByID('end_time').select('6:00 PM')
    cy.getByID('um-field--first-name').type('Aleeza')
    cy.getByID('um-field--last-name').type('Test5')
    cy.getByID('um-field--phone-number').clear().type('+923056785444')
    cy.getByID('um-field--email').type('aleexa.waitlist@gmail.com')
    cy.getByID('um-field--special-request-waitlist').type('test request')
    cy.getByID('um-submit-waitlist').click()
    cy.wait(5000)
    cy.getByClass('um-modals--heading').should('exist').contains("You're on the waitlist!")
 



    

    //cy.wait(5)
    //cy.getByClass('um-user-reserv-details-section--content').should("exist").contains("confirmed",{timeout: 15000}).contains("10:00 AM")
    //cy.getByID('ums-done-button').click()

    //cy.getByClass('ums-footer__label').click()
    //cy.location('pathname', {timeout: 60000}).should('include', '/e/TunZag');
  })

  /* it('Edit reservation',()=> {

  })
  it('Cancel reservation',()=> {

  })
 */
})