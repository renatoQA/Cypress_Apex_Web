import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../pages/loginPage";

// Sign-up:
Given("Open the apex environment", function () {
  cy.visit("/");
});

When("I fill the username", () => {
  const userName = Cypress.env("USERNAME");
  loginPage.loginUserName(userName);
});

When("I fill the password", () => {
  const password = Cypress.env("PASSWORD");
  loginPage.loginPassword(password);
});

When("Click on the SignIn button", () => {
  loginPage.loginSubmitBtn();
});

Then("I logged in successfully", () => {
  loginPage.loginSuccessfully();
});

