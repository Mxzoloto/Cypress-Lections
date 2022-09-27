/// <reference types="cypress"/>

it("Пошук в гугл", () => {
    cy.visit('https://google.com/');
    cy.get('input[class="gLFyf gsfi"]').type('Cypress');
    cy.get('div.wM6W7d').eq(1).click();

})


