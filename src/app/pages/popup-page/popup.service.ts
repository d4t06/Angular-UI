import {
  ElementRef,
  Injectable,
  TemplateRef,
  ViewChild,
  inject,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { PopupTriggerComponent } from "./popup-trigger/popup-trigger.component";
import { CdkPortal } from "@angular/cdk/portal";
import { Overlay, OverlayRef } from "@angular/cdk/overlay";
import { ButtonComponent } from "../../components/button/button.component";

@Injectable()
export class PopupService {
  isMounted = new BehaviorSubject<boolean>(false);
  isOpen = new BehaviorSubject<boolean>(false);
  appendTo = "portal";

  portal: CdkPortal;
  overlayRef: OverlayRef;
  triggerRef: ElementRef<HTMLButtonElement>;
  // contentRef: HTMLDivElement;
  // animationRef: HTMLDivElement;

  overlay = inject(Overlay);

  open() {
    this.isOpen.next(true);

    if (this.appendTo === "portal") {
      this.overlayRef = this.overlay.create();

      this.overlayRef.backdropClick().subscribe(() => this.close());
      this.overlayRef.attach(this.portal);
    }
  }

  close() {
    this.isMounted.next(false);
  }

  toggle() {
    if (this.isMounted.getValue()) this.close();
    if (!this.isOpen.getValue()) this.open();
  }
}
