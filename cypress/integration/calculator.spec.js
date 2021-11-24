describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should add two numbers and get the correct answer', () => {
    cy.get('#number6').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '11');
  })

  it('should carry out subtraction with two numbers and get the correct answer', () => {
    cy.get('#number9').click();
    cy.get('#operator-subtract').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4');
  })

  it('should multiply two numbers and get the correct answer', () => {
    cy.get('#number7').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '28');
  })

  it('should divide two numbers and get the correct answer', () => {
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4');
  })

  it('should chain multiple operations together', () => {
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number7').click();
    cy.get('#operator-subtract').click();
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('#number8').click();
    cy.get('#operator_add').click();
    cy.get('.display').should('contain', '32');
  })

  it('should chain multiple operations together', () => {
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number7').click();
    cy.get('#operator-subtract').click();
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('#number8').click();
    cy.get('#operator_add').click();
    cy.get('.display').should('contain', '32');
  })

  it('can handle subtraction through zero to a negative and then addition back through zero to a positive', () => {
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('#number7').click();
    cy.get('#operator_add').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '6');
  })

  it('can handle subtraction through zero to a negative', () => {
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-5');
  })

  it('can handle division to a decimal number', () => {
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#decimal').click();
    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '7.35');
  })

  it('can handle mulitplication to a large number', () => {
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4939039533');
  })

  it('handles division by zero by returning an error', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Error');
  })


})