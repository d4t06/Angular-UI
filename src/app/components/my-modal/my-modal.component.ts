import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import {
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { ModalHeaderComponent } from './modal-header.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-my-modal',
  standalone: true,
  imports: [PortalModule, ModalHeaderComponent, NgClass],
  templateUrl: './my-modal.component.html',
})
export class MyModalComponent {
  @Input({required: true}) title : string
  @ViewChild(CdkPortal) portal: CdkPortal;

  overlayRef: OverlayRef;
  isOpen = false;

  constructor(private overlay: Overlay) {}


  // overlayConfig = new OverlayConfig({
  // positionStrategy: this.overlay
  //   .position()
  //   .global()
  //   .centerHorizontally()
  //   .centerVertically(),
  // hasBackdrop: true,
  // });

  classes = {
    active: 'opacity-[1]',
  };

  open() {
    this.isOpen = true;

    this.overlayRef = this.overlay.create();

    this.overlayRef.backdropClick().subscribe(() => this.close());
    this.overlayRef.attach(this.portal);
  }

  close() {
    this.isOpen = false;
    if (this.overlayRef) this.overlayRef.detach();
  }
}
