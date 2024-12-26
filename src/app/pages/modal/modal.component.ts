import { Component, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { MyModalComponent } from '../../components/my-modal/my-modal.component';
import { ConfirmModalComponent } from '../../components/my-modal/confirm-modal.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ButtonComponent, MyModalComponent, ConfirmModalComponent],
  template: `
    <app-button (click)="this.myModalComponent.open()"> Open </app-button>

    <app-my-modal title="alsdjflkasdjf">
      <app-confirm-modal (close)="close()" />
    </app-my-modal>
  `,
})
export class ModalComponent {
  @ViewChild(MyModalComponent, { static: true })
  myModalComponent: MyModalComponent;

  openModal() {
    console.log('open modal');

    this.myModalComponent.open();
  }

  close() {
    this.myModalComponent.close();
  }
}
