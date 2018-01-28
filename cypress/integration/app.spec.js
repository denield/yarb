describe('Application', () => {
  it('Hello World', () => {
    cy.visit('http://localhost:8080')

    cy.get('#app')
      .contains('Hello World')
  })
})