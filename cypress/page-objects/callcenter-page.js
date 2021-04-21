/// <reference types="cypress" />

require('cypress-xpath')

export class CallCenterPage {
    openCustomerManagement() {
        cy.get(':nth-child(1) > a > .menu-title').click();
    }

    insertMobileNo(number) {
        cy.get('#mobileNumber1').type(number);
    }

    clickSearchButton() {
        cy.xpath('//button[normalize-space()="Search"]').click();
        cy.wait(3000);
    }

    clickDetailsButton() {
        cy.xpath('//button[normalize-space()="Details"]').click();
    }

    validateDetailsPageHeader(pageHeader) {
        cy.get('.card-title').invoke('text').should('eq', pageHeader);
    }

    searchCustomer(mobileNo) {
        this.openCustomerManagement();
        this.insertMobileNo(mobileNo);
        this.clickSearchButton();
        cy.wait(10000);
    }

    validateSearchMobile(mobileNo) {
        cy.get('u > span').invoke('text').should('eq', mobileNo);
    }

    validateDetailsPage(mobileNo) {
        cy.get('.personal-info > :nth-child(2) > .col-md-6').invoke('text').should('eq', mobileNo);
    }
}