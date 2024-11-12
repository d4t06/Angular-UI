import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { ButtonComponent } from '../../../../components/button/button.component';
// import { TodoAction } from '../../todo.component';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { TodoService } from '../../../../services/todo.service';
import { TODO_SERVICE_TOKEN } from '../../todo.component';

type Delete = {
  variant: 'delete';
  index: number;
};

type Complete = {
  variant: 'complete';
  index: number;
};

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [ButtonComponent, FormsModule, NgClass],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  // @Input() todos!: Todo[];
  // @Output() action = new EventEmitter<TodoAction>();


  constructor(@Inject(TODO_SERVICE_TOKEN) private todoService: TodoService) {}

  todoList = this.todoService.todoList;


  handleTodoAction(props: Delete | Complete) {
    switch (props.variant) {
      case 'delete':
        this.todoService.action({ variant: 'delete', index: props.index });
        break;
      case 'complete':
        this.todoService.action({ variant: 'complete', index: props.index });
        break;
    }
  }
}
