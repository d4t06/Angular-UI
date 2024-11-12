type Add = {
  todo: Todo;
  variant: 'add';
};

type Edit = {
  index: number;
  name: string;
  variant: 'edit';
};
type Complete = {
  index: number;
  variant: 'complete';
};
type Delete = {
  index: number;
  variant: 'delete';
};

export type TodoAction = Add | Edit | Delete | Complete;

export class TodoService {
  todoList: Todo[] = [];

  action(action: TodoAction) {
    console.log('action', action);

    switch (action.variant) {
      case 'add':
        this.todoList.push(action.todo);
        break;
      case 'edit': {
        const { index, name } = action;
        this.todoList[index].name = name;
        break;
      }
      case 'complete':
        this.todoList[action.index].complete =
          !this.todoList[action.index].complete;

        break;
      case 'delete':
        this.todoList.splice(action.index, 1);
        break;
    }
  }
}
