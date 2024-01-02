import {loginPageLocators} from "../locators";
import BasePage from "./BasePage";

class LoginPage extends BasePage{
    constructor() {
        super();
    }
    doLogin(){
        cy.log('Navigating to login')
        this.navigate('https://demo.nopcommerce.com/login/');
        cy.log('Filling imputs');
        cy.get(loginPageLocators.emailInput).type(Cypress.env('username'));
        cy.get(loginPageLocators.passwordInput).type(Cypress.env('password'));
        cy.wait(2000)
        cy.log("Trying to complete log in flow")
        this.clickOnElement(loginPageLocators.completeLoginButton);


    }
    doLogout(){
        this.clickOnElement(loginPageLocators.logoutButton);
    }

}
export default LoginPage;