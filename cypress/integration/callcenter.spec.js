/// <reference types="cypress" />

import { CallCenterPage } from "../page-objects/callcenter-page";
import { LoginPage } from "../page-objects/login-page";
import { userEmails, userMobileNo, userName, userPasswords, pageTitle } from "../utils/constants";

describe('Call Center Regression Suite', () => {
    const loginPage = new LoginPage();
    const callCenterPage = new CallCenterPage();

    before(() => {
        loginPage.navigate();
        loginPage.validateLoginForm();
    });

    /*after(() => {
        //loginPage.validateUrl();
        loginPage.logout();
        loginPage.validateLoginForm();
    });*/

    it('Login with operator credentials', () => {
        const userEmail = userEmails.CC;
        const password = userPasswords.CommonPass;
        const user = userName.CC_OPERATOR;
        loginPage.login(userEmail, password);
        loginPage.validateLoggedInUser(user);
    });

    it('Search customer', () => {
        const mobile = userMobileNo.Customer;
        callCenterPage.searchCustomer(mobile);
        callCenterPage.validateSearchMobile(mobile);
    });

    it.skip('Check customer details', () => {
        const title = pageTitle.CustomerDetails;
        callCenterPage.clickDetailsButton();
        //callCenterPage.validateDetailsPageHeader(title);
    });
});