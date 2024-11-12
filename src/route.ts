import { ButtonPageComponent } from './app/pages/button/button.component';
import { HomeComponent } from './app/pages/home/home.component';
import { LoginComponent } from './app/pages/login/login.component';
import { ModalComponent } from './app/pages/modal/modal.component';
import { TodoComponent } from './app/pages/todo/todo.component';

export const ROUTES: {
  path: string;
  title: string;
  page: any;
  layout?: '' | 'auth' | 'dashboard';
}[] = [
  {
    path: '',
    title: 'Home',
    page: HomeComponent,
  },
  {
    path: 'button',
    title: 'Button',
    page: ButtonPageComponent,
  },
  {
    path: 'modal',
    title: 'Modal',
    page: ModalComponent,
  },
  {
    path: 'todo',
    title: 'Todo',
    page: TodoComponent,
  },
  {
    path: 'login',
    title: 'Login',
    page: LoginComponent,
    layout: 'auth',
  },
];
