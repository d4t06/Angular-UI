import { Component, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { MyModalComponent } from '../../components/my-modal/my-modal.component';
import { ClassDirective } from '../../directives/class.directive';
import { StyleDirective } from '../../directives/style.directive';
import { ConfirmModalComponent } from '../../components/my-modal/confirm-modal.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    ButtonComponent,
    MyModalComponent,
    ClassDirective,
    StyleDirective,
    ConfirmModalComponent,
  ],
  template: `
    @if (this.myModalComponent.isOpen) {
    <app-button (click)="this.myModalComponent.close()"> Close </app-button>
    } @else {
    <app-button (click)="this.myModalComponent.open()"> Open </app-button>
    }

    <!-- <app-my-modal>
      adsfsadfsadadsfsadfsadadsfsadfsadadsfsadfsadadsfsadfsad adsfsadfsad
    </app-my-modal> -->

    <app-my-modal title="alsdjflkasdjf">
      <app-confirm-modal (close)="close()" />
    </app-my-modal>
  `,
})
export class ModalComponent {
  @ViewChild(MyModalComponent, { static: true })
  myModalComponent: MyModalComponent;

  openModal() {
    this.myModalComponent.open();
  }

  close() {
    this.myModalComponent.close();
  }
}
