import {loginPageLocators} from "../../fixtures/locators";
import LoginPage from "../pages/LoginPage";
describe("User Should be able to log in and logout",() =>{
    let loginPage = new LoginPage();
    beforeEach("Navigate to Login page", ()=>{
        cy.log('Navigating to Login')
        loginPage.navigate(Cypress.env('loginUrl'));
    })
    it('should be able to do login and logout', async ()=> {
        await loginPage.doLogin();
        cy.get(loginPageLocators.logoutButton).should('be.visible');
        await loginPage.doLogout();
        cy.get(loginPageLocators.loginButton).should('be.visible');
    });

})