/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page";

describe('to do test suite', () => {
    const todoPage = new TodoPage();

    before(() => {
        todoPage.navigate();
    });
    
    it('add a to do item', () => {
        todoPage.addTodo('Attend MBL Meeting');
        todoPage.validateTodoTxt(0, 'MBL');
    });
    
    it('check the added to do item', () => {
        todoPage.validateNotChecked(0);
        todoPage.clickTodoItem(0);
        todoPage.validateChecked(0);
        todoPage.validateLineThrough();
    });
    
    it('clear the checked item', () => {
        todoPage.clickTextContainer('Clear');
        todoPage.validateNoDescendants();
    });
    
    it('add a new to do item and check', () => {
        todoPage.addTodo('UCL QF');
        todoPage.validateNotChecked(0);
        todoPage.clickTodoItem(0);
        todoPage.validateChecked(0);
        todoPage.validateLineThrough();
    });
});