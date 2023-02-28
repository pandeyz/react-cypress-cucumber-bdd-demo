
Given('I navigate to the Orange CRM Website', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/');
});

When('I type email in email input', () => {
  cy.get('input[name="username"]').type('Admin');
});

When('I type password in password input', () => {
  cy.get('input[name="password"]').type('admin123');
});

When('I click on Login button', () => {
  cy.get('.orangehrm-login-button').click();
});

Then('I validate the page sub title', () => {
    cy.get('.oxd-topbar-header-breadcrumb-module').should('be.visible', {timeout: 10000});
})