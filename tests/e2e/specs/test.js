// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
})

it('operators update the display', () => {
  cy.get('#number5').click();
  cy.get('#operator_multiply').click();
  cy.get('#number5').click();
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', '25')
})

it('multiple operations', () => {
  cy.get('#number5').click();
  cy.get('#operator_multiply').click();
  cy.get('#number5').click();
  cy.get('#operator_add').click();
  cy.get('#number5').click();
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', '30')
})

it('decimal number return', () => {
  cy.get('#number7').click();
  cy.get('#operator_divide').click();
  cy.get('#number2').click();
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', '3.5')
})

it('range of numbers operations', () => {
  cy.get('#number5').click();
  cy.get('#operator_subtract').click();
  cy.get('#number8').click();
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', '-3')
})

it('range of numbers operations', () => {
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#operator_multiply').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', '99980001')
})

it('exeptional circumstance', () => {
  cy.get('#number5').click();
  cy.get('#operator_divide').click();
  cy.get('#number0').click();
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', 'Error')
})