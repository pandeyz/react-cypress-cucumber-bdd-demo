
Feature: Open Quincus website

    I want to open Quincus website

    Scenario: Open Quincus website
        Given I navigate to the Quincus website
        When I type email in email input
        When I click on next button
        When I type password in password input
        When I click on Login button
        Then Validate the page sub title