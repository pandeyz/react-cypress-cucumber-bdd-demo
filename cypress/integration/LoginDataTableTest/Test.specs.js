import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('User is at the login page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})

When('User enters username as {string} and password as {string}', (username, password) => {
    // cy.get('#txtUsername username').type(username)
    cy.get('input[name="username"]').type(username);
    // cy.get('#txtPassword password').type(password)
    cy.get('input[name="password"]').type(password);
})

And('User clicks on login button', () => {
    // cy.get('#btnLogin').click()
    cy.get('.orangehrm-login-button').click();
})

Then('User is able to successfully login to the Website', () => {
    // cy.get('#welcome').should('be.visible', {timeout: 10000})
    cy.get('.oxd-topbar-header-breadcrumb-module').should('be.visible', {timeout: 10000});
})