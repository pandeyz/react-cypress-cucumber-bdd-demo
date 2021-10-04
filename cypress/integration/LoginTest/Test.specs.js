
Given('I navigate to the Quincus website', () => {
  cy.visit('https://uat.quincus.com/');
});

When('I type email in email input', () => {
  cy.get('input[name="username"]').type('vivek.kumar@quincus.com');
});

When('I click on next button', () => {
  cy.get('[data-automation_id="admloginnextbtn"]').click();
});

When('I type password in password input', () => {
  cy.get('input[data-automation_id="admloginpasswordtxtbox"]').type('Quincus1!');
});

When('I click on Login button', () => {
  cy.get('[data-automation_id="admloginwithpasswordbtn"]').click();
});

Then('Validate the page sub title', () => {
  cy.get('.page-subtitle').contains('Have an overview of all the modules.');
});