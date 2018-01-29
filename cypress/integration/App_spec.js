// MY E2E - test
describe('test the flow in to-do app', () => {
    it('Create a to-do, add it to done-list and then delete it', () => {
        cy.visit('http://localhost:3000');

        cy.get('input.todo-input')
            .type('koka kaffe');

        cy.get('.submit-button')
            .click();

        cy.get('.todo-list')
            .should('contain', 'koka kaffe');

        cy.get('button.complete-button')
            .click();

        cy.get('.todo-list')
            .should('not.contain', 'koka kaffe');

        cy.get('.done-list')
            .should('contain', 'koka kaffe');

        cy.get('button.delete-button')
            .click();

        cy.get('.list-content')
            .should('not.contain', 'koka kaffe');
    });
});
