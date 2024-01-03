declare global {
    namespace Cypress {
        interface Chainable<Subject = any> {
            customClick(options?: { force?: boolean }): Chainable<Subject>;
        }
    }
}
Cypress.Commands.add('customClick', { prevSubject: 'element' }, (subject, options = { force: false }) => {
    const clickOptions: Partial<Cypress.ClickOptions> = { force: options.force };

    cy.wrap(subject).click(clickOptions).as('customClicked');
});
