/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page";

describe('filtering', function() {
    const todoPage = new TodoPage();

    before(() => {
        todoPage.navigate();

        todoPage.addTodo('Clean Room');
        todoPage.addTodo('Learn JavaScritp');
        todoPage.addTodo('Use Cypress');

        todoPage.clickTodoItem(2);
    });

    it('should filter "Active" correctly', () => {
        todoPage.clickTextContainer('Active');
        todoPage.validateNumberOfTodosShown(2);
    });

    it('should filter "Completed" correctly', () => {
        todoPage.clickTextContainer('Completed');
        todoPage.validateNumberOfTodosShown(1);
    });
    
      it('should filter "All" correctly', () => {
        todoPage.clickTextContainer('All');
        todoPage.validateNumberOfTodosShown(3);
    });
});