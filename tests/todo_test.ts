import base from '../pages/base';
import todoPage from '../pages/todo';

Feature('Test TodoMVC React App');

let todoItems: string[] = ['Buy groceries', 'Walk the dog', 'Clean the house'];

Before(({ I }) => {
    base.amOnPage(I, '/'); // Navigate to the page before each scenario
});

Scenario('Add a new todo',  ({ I }) => {
    todoPage.addTodoItem(I, todoItems[0]);
    todoPage.seeTodoItem(I, todoItems[0]);
});

Scenario('Complete a todo', ({ I }) => {
    todoPage.addTodoItem(I, todoItems[1]);
    todoPage.clickToggle(I);
    todoPage.seeToggleInField(I);
});

Scenario('Clear completed todos', ({ I }) => {
    todoItems.forEach(item => {
        todoPage.addTodoItem(I, item);
    });
    todoPage.markTodoItemAsCompleted(I, 1); 
    todoPage.markTodoItemAsCompleted(I, 2); 
    todoPage.clickClearCompleted(I);
    todoPage.seeTodoItem(I, todoItems[2]);
    todoPage.doNotSeeTodoItem(I, todoItems[0]);
    todoPage.doNotSeeTodoItem(I, todoItems[1]);
});

Scenario('Filter todos by All / Active', ({ I }) => {
    todoItems.forEach(item => {
        todoPage.addTodoItem(I, item);
    });
    todoPage.markTodoItemAsCompleted(I, 1); 
    todoPage.filterBy(I, '');
    todoItems.forEach(item => {
        todoPage.seeTodoItem(I, item);
    });
    todoPage.filterBy(I, 'active');
    todoPage.seeTodoItem(I, todoItems[1]);
    todoPage.seeTodoItem(I, todoItems[2]);
    todoPage.doNotSeeTodoItem(I, todoItems[0]);
});
