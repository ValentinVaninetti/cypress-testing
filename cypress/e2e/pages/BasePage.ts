abstract class BasePage{

    navigate(url){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.visit(url);
    }
    async clickOnElement(element: string, options?: { force?: boolean }) {
        await cy.get(element).customClick(options);
    }



}
export default BasePage;