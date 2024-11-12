import { Component, InjectionToken } from '@angular/core';
import { AddTodoFormComponent } from './components/add-todo-form/add-todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoService } from '../../services/todo.service';
import { Observable } from 'rxjs';

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

export const TODO_SERVICE_TOKEN = new InjectionToken<TodoService>(
  'TODO_SERVICE'
);

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [AddTodoFormComponent, TodoListComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
  providers: [
    {
      provide: TODO_SERVICE_TOKEN,
      useClass: TodoService,
    },
  ],
})
export class TodoComponent {
  todos: Todo[] = [];

  data: number[] = [];

  constructor() {}
}
