export class TodoPage {
    newTodoInput = '.new-todo';
    todoList = '.todo-list';
    toggle = '.toggle';
    view = '.view';
    clearCompleted = '.clear-completed';
  
    addTodoItem(I: CodeceptJS.I, item: string) {
      I.fillField(this.newTodoInput, item);
      I.pressKey('Enter');
    }

    seeTodoItem(I: CodeceptJS.I, item: string) {
      I.see(item, this.todoList);
    }

    doNotSeeTodoItem(I: CodeceptJS.I, item: string) {
        I.dontSee(item, this.todoList);
    }

    seeToggleInField(I: CodeceptJS.I) {
        I.seeInField(this.toggle, true);
    }

    clickToggle(I: CodeceptJS.I) {
        I.click(this.toggle);
    }

    filterBy(I: CodeceptJS.I, filter: string) {
        I.click(`.filters a[href="#/${filter}"]`);
    }

    markTodoItemAsCompleted(I: CodeceptJS.I, itemNum: number) {
        I.click(locate(this.view).at(itemNum).find(this.toggle));
    }

    clickClearCompleted(I: CodeceptJS.I) {
        I.click(this.clearCompleted);
    }
  }
  
  // Create an instance of the page object
  const todoPage = new TodoPage();
  export default todoPage;