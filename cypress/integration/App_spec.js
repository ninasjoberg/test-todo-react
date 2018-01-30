// MY E2E - test
describe('test the flow in to-do app', () => {
    it('should create two to-do, add one to done-list, delete it from done-list and then delete the one in to-do-list', () => {
        cy.visit('http://localhost:3000');

        cy.get('input.todo-input')
            .type('koka kaffe', { delay: 100 });

        cy.get('.submit-button')
            .click();

        cy.get('.todo-list')
            .should('contain', 'koka kaffe');

        cy.get('input.todo-input')
            .type('skriva kod', { delay: 100 });

        cy.get('.submit-button')
            .click();

        cy.get('.todo-list ul li')
            .should(($lis) => {
                expect($lis).to.have.length(2);
                expect($lis.eq(0)).to.contain('koka kaffe');
                expect($lis.eq(1)).to.contain('skriva kod');
            });

        cy.get('.todo-list ul li:first button.complete-button')
            .click();

        cy.get('.todo-list')
            .should('not.contain', 'koka kaffe');

        cy.get('.done-list')
            .should('contain', 'koka kaffe');

        cy.get('.done-list ul li:first button.delete-button')
            .click();

        cy.get('.list-content')
            .should('not.contain', 'koka kaffe');

        cy.get('.todo-list ul li:first button.delete-button')
            .click();

        cy.get('.list-content')
            .should('not.contain', 'skriva kod');
    });
});
