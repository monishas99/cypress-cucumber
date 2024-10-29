const URL = 'https://www.saucedemo.com'
const USERNAME_INPUT = '[data-test="username"]'
const PASSWORD = '[data-test="password"]'
const SUBMIT_BUTTON = '[data-test="login-button"]'

class LoginPage {
    static visit(){
        cy.visit(URL)
    }

    static fillusername(name){
        cy.get(USERNAME_INPUT).type(name)
    }

    static fillpassword(password){
        cy.get(PASSWORD).type(password)
    }

    static submit(){
        cy.get(SUBMIT_BUTTON).click()
    }
}

export default LoginPage