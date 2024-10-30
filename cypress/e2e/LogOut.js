import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the Sauce Demo login page', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
  });
  
  When('I click on shopping badge', () => {
    cy.get('[data-test="shopping-cart-link"]').click();
  });

  When('I click on the burger menu', () => {
    cy.get('#react-burger-menu-btn').click(); 
  });
  
  When('I click on the logout button', () => {
    cy.get('[data-test="logout-sidebar-link"]').click();
  });

  Then('I should be logged out successfully', () => {
    cy.url().should('include', 'saucedemo');
  });