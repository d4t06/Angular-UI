import { Overlay, OverlayRef } from "@angular/cdk/overlay";
import { CdkPortal, PortalModule } from "@angular/cdk/portal";
import { Component, Input, ViewChild, inject } from "@angular/core";
import { ModalHeaderComponent } from "./modal-header.component";
import { NgClass } from "@angular/common";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-my-modal",
  standalone: true,
  imports: [PortalModule, ModalHeaderComponent, NgClass],
  templateUrl: "./my-modal.component.html",
})
export class MyModalComponent {
  @Input({ required: true }) title: string;
  @ViewChild(CdkPortal) portal: CdkPortal;

  isMounted = new BehaviorSubject<boolean>(false);
  isOpen = new BehaviorSubject<boolean>(false);

  overlayRef: OverlayRef;

  overlay = inject(Overlay);

  open() {
    this.isOpen.next(true);

    this.overlayRef = this.overlay.create();

    this.overlayRef.attach(this.portal);
    this.overlayRef.backdropClick().subscribe(() => this.close());
  }

  close() {
    this.isMounted.next(false);
  }

  ngOnInit() {
    this.isMounted.subscribe((isMounted) => {
      if (!isMounted)
        setTimeout(() => {
          this.isOpen.next(false);
          if (this.overlayRef) this.overlayRef.detach();
        }, 200);
    });

    this.isOpen.subscribe((isOpen) => {
      if (isOpen)
        setTimeout(() => {
          this.isMounted.next(true);
        }, 0);
    });
  }

  classes = {
    unMountedContent: "opacity-0 scale-[.95]",
    mountedContent: "opacity-100 scale-[1]",
    unMountedLayer: "opacity-0",
    mountedLayer: "opacity-100",
  };
}
