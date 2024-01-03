import BasePage from "./BasePage";
import {registerPageLocators} from "../../fixtures/locators";
class RegisterPage extends BasePage{

    constructor() {
        super();
    }
    async registerUser(){
        cy.log('Creating user');
        await this.clickOnElement(registerPageLocators.genderSelectorInput);
        cy.log('Filling inputs');
        cy.get(registerPageLocators.firstNameInput).type(Cypress.env('firstName'));
        cy.get(registerPageLocators.lastNameInput).type(Cypress.env('lastName'));
        cy.get(registerPageLocators.dayOfBirthOption).select(1);
        cy.get(registerPageLocators.monthOfBirthOption).select(1);
        cy.get(registerPageLocators.yearOfBirthOption).select(1);
        cy.get(registerPageLocators.emailInput).type(Cypress.env('username'));
        cy.get(registerPageLocators.companyName).type('asd');
        cy.get(registerPageLocators.passwordInput).type(Cypress.env('password'));
        cy.get(registerPageLocators.reTypePasswordInput).type(Cypress.env('password'));
        await this.clickOnElement(registerPageLocators.registerButton);
    }
}
export default RegisterPage;