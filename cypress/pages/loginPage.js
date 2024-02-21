const loginLocators = require("./locators/LoginLocators")
const homelocators = require("./locators/HomeLocators")

// Login page methods
class LoginPage {
    // login 
    loginUserName(username) {
        cy.get(loginLocators.login_username).type(username)
    }
    loginPassword(password) {
        cy.get(loginLocators.login_password).type(password)
    }
    loginSubmitBtn() {
        cy.get(loginLocators.signIn_button).click()
    }
    loginSuccessfully(){
        cy.get(homelocators.header_home_locator).should('exist')
    }
}

module.exports = new LoginPage()