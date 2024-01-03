import {loginPageLocators} from "../../fixtures/locators";
import BasePage from "./BasePage";

class LoginPage extends BasePage{
    constructor() {
        super();
    }
    async doLogin(){
        cy.log('Filling imputs');
        cy.get(loginPageLocators.emailInput).type(Cypress.env('username'));
        cy.get(loginPageLocators.passwordInput).type(Cypress.env('password'));
        cy.log("Trying to complete log in flow")
        await this.clickOnElement(loginPageLocators.completeLoginButton);


    }
    async doLogout(){
       await this.clickOnElement(loginPageLocators.logoutButton);
    }

}
export default LoginPage;