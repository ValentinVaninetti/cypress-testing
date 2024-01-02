import {loginPageLocators} from "../locators";
import LoginPage from "../pages/LoginPage";
import * as assert from "assert";
describe("User Should be able to log in and logout",() =>{
    let loginPage = new LoginPage();
    beforeEach("Navigate to Login page", ()=>{
        loginPage.navigate(Cypress.env('url'+'/login'))
    })
    it('should be able to do login', ()=> {
        loginPage.doLogin();
        assert(cy.get(loginPageLocators.logoutButton).should('be.visible'));
    });
    it('should be able to logout', ()=>{
        loginPage.doLogout();
        assert(cy.get(loginPageLocators.loginButton).should('be.visible'));
    })
})