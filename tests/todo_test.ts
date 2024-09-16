//import { I } from 'codeceptjs';

Feature('Test TodoMVC React App');

Scenario('Add a new todo',  ({ I }) => {
    I.amOnPage('/');
    I.fillField('data-testid=text-input', 'Buy groceries');
    I.pressKey('Enter');
    I.see('Buy groceries', '.todo-list');
});

Scenario('Complete a todo', ({ I }) => {
    I.amOnPage('/');
    I.fillField('.new-todo', 'Walk the dog');
    I.pressKey('Enter');
    I.click('.toggle');
    I.seeInField('.toggle', true);
});

Scenario('Delete a todo', ({ I }) => {
    I.amOnPage('/');
    I.fillField('.new-todo', 'Clean the house');
    I.pressKey('Enter');
    I.click('.destroy');
    I.dontSee('Clean the house', '.todo-list');
});
