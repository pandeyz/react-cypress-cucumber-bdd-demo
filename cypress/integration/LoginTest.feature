
Feature: Orange CRM Website Login

    I want to open Orange CRM Website & do login

    Scenario: Open Orange CRM Website
        Given I navigate to the Orange CRM Website
        When I type email in email input
        When I type password in password input
        When I click on Login button
        Then I validate the page sub title