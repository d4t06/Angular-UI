import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-button-page',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './button.component.html',
})
export class ButtonPageComponent {
  click() {
    console.log('click');
  }
}
