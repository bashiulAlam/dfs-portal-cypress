/// <reference types="cypress" />

export class LoginPage {
    navigate() {
        cy.visit('http://qa-auth.dms.kpp.com:10900/authentication-service-provider-1.0/login');
        //cy.visit('http://qa-gw.callcenter.kpp.com:20030/');
    }

    login(username, password) {
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('#login_button', {timeout: 6000}).click();
    }

    logout() {
        cy.get('#dropdownBasic3').click();
        cy.get('.dropdown-menu > :nth-child(4)').click();
    }

    validateUrl() {
        cy.url().should('eq', 'http://qa-gw.callcenter.kpp.com:20030/ui/call-center/#home');
    }

    validateLoginForm() {
        cy.get('#login_form').should('be.visible');
    }

    validateLoggedInUser(username) {
        cy.get('#dropdownBasic3 > b').invoke('text').should('eq', username);
    }
}