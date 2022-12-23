/// <reference types = "cypress"/>  

/* Task 6 - optional task*/
/* it('Test 1', () => {
    cy.visit('http://localhost:8080/semesters/spring')
    cy.get('h3').contains('spring')
    cy.get('a').should('contain', 'Back to courses')
    cy.get('a').contains('Back to courses').click() // clicking should redirect to the courses page
}) */

 it('Test written myself', () => {
    cy.visit('http://localhost:8080/courses')
    cy.get('h3').contains('Courses')
    cy.get('a').should('contain', 'spring')
     cy.contains('spring').click()
     cy.url().should('be.equal', 'http://localhost:8080/semesters/')
/*
    cy.get('a').contains('Back to courses').click() // clicking should redirect to the courses page
*/
})