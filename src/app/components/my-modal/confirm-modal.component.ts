import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  standalone: true,
  selector: 'app-confirm-modal',
  template: `
    <p class="font-medium text-red-500">This action cannot be undone</p>
    <div class="flex space-x-2 mt-4">
    <app-button (myClick)="onClose()" colors="second"> Close </app-button>
      <app-button (myClick)="onAccept()"> Yes, please </app-button>
    </div>
  `,
  imports: [ButtonComponent],
})
export class ConfirmModalComponent {
  @Output() accept = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
  onAccept() {
    this.accept.emit();
  }
}
