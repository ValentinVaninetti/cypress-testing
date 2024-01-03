import RegisterPage from "../pages/RegisterPage";
import {registerPageLocators} from "../../fixtures/locators";
describe("User Should be able to register",() =>{
    let registerPage = new RegisterPage();
    beforeEach("Navigate to Register page", ()=>{
        cy.log('Navigating to register')
        registerPage.navigate(Cypress.env('registerUrl'));
    })
    it('should be able to register', async ()=> {
        await registerPage.registerUser();
        cy.get(registerPageLocators.resultText).should('equal', "Your registration completed")
    });

})