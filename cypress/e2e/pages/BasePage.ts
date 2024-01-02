abstract class BasePage{

    navigate(url){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.visit('https://demo.nopcommerce.com/login/');
    }
    async clickOnElement(element){
        await cy.get(element).click()
    }



}
export default BasePage;