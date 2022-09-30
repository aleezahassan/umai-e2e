/* declare namespace Cypress {
    interface Chainable {
      getByData(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
      getByClass(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
      getByID(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
      getWithinIframe(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
      iframeLoaded(): Chainable<JQuery<HTMLElement>>
      getInDocument(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
      //getIframeBody(dataTestAttribute: any): Chainable<JQuery<HTMLElement>>
    }
  } */

  declare namespace Cypress {
    interface Chainable<Subject = any> {
        /**
         * Custom command to ... add your description here
         * @example cy.clickOnMyJourneyInCandidateCabinet()
         */
         getByData(dataTestAttribute: string): Chainable<any>;
         getByClass(dataTestAttribute: string): Chainable<any>;
         getByID(dataTestAttribute: string): Chainable<any>;
        //getIframeBody(): Chainable<any>;
        getStripeElement(dataTestAttribute: string):Chainable<any>;
        getInDocument(dataTestAttribute:any): Chainable<any>;
        iframeLoaded(): Chainable<any>;
        getWithinIframe(dataTestAttribute: string): Chainable<any>;

    }
}