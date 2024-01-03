import HomePage from "../HomePage";

class NavBarComponent extends HomePage{
    constructor() {
        super();
    }

    async logOut(element){
        await cy.get(element).click();
    }
}