/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page";

describe('visual test suite', () => {
    const todoPage = new TodoPage();

    before(() => {
        todoPage.navigate();
    }); 

    beforeEach(() => cy.eyesOpen({appName: 'TAU TodoMVC', batchName: 'TAU TodoMVC'}));

    afterEach(() => cy.eyesClose());

    it('add todo tasks', () => {
        cy.eyesCheckWindow('empty todo list');

        todoPage.addTodo('Clean room');
	    todoPage.addTodo('Learn javascript');

        cy.eyesCheckWindow('todo list with 2 items');

	    todoPage.clickTodoItem(0);

        cy.eyesCheckWindow('check completed');
    });
});