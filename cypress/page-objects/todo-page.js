/// <reference types="cypress" />

export class TodoPage {
    navigate() {
        cy.visit('http://todomvc-app-for-testing.surge.sh/');
    }

    addTodo(todoText) {
        cy.get('.new-todo').type(todoText + '{enter}');
    }

    validateTodoTxt(todoIndex, expectedText) {
        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`).should('contain.text', expectedText);
    }

    validateNotChecked(todoIndex) {
        cy.get(`:nth-child(${todoIndex + 1}) > .view > .toggle`).should('not.be.checked');
    }

    validateChecked(todoIndex) {
        cy.get(`:nth-child(${todoIndex + 1}) > .view > .toggle`).should('be.checked');
    }

    clickTodoItem(todoIndex) {
        cy.get(`:nth-child(${todoIndex + 1}) > .view > .toggle`).click();
    }

    clickTextContainer(expectedText) {
        cy.contains(expectedText).click();
    }

    validateNumberOfTodosShown(expectedNumberOfTodos) {
        cy.get('.todo-list li').should('have.length', expectedNumberOfTodos);
    }
    
    validateNoDescendants() {
        cy.get('.todo-list').should('not.have.descendants', 'li');
    }

    validateLineThrough() {
        cy.get('.completed > .view > label').should('have.css', 'text-decoration-line', 'line-through');
    }
}