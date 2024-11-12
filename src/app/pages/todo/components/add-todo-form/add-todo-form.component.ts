import { Component, EventEmitter, Inject, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../../components/button/button.component';
// import { TodoAction } from '../../todo.component';
import { TodoService } from '../../../../services/todo.service';
import { TODO_SERVICE_TOKEN } from '../../todo.component';

@Component({
  selector: 'app-add-todo-form',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './add-todo-form.component.html',
})
export class AddTodoFormComponent {
  // @Input() addNewTodo!: (todo: string) => void;
  // @Output() addTodo = new EventEmitter<Todo>();
  // @Output() action = new EventEmitter<TodoAction>();

  // constructor(@Inject(TODO_SERVICE_TOKEN) private todoService: TodoService) {}
  todoService = inject(TODO_SERVICE_TOKEN)

  newTodo: string = '';

  handleAddNewTodo() {
    const newTodo: Todo = {
      name: this.newTodo,
      complete: false,
    };

    this.todoService.action({ variant: 'add', todo: newTodo });
    this.newTodo = '';
  }
}
