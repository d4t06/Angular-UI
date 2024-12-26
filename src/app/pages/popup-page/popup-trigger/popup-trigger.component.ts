import {
  Component,
  ElementRef,
  InjectionToken,
  TemplateRef,
  ViewChild,
  inject,
} from "@angular/core";
import { ButtonComponent } from "../../../components/button/button.component";
import { PopupService } from "../popup.service";

@Component({
  selector: "app-popup-trigger",
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: "./popup-trigger.component.html",
})
export class PopupTriggerComponent {
  popupService = inject(PopupService);

  @ViewChild("button", { read: ElementRef })
  buttonRef: ElementRef<HTMLButtonElement>;

  ngOnInit() {
    this.popupService.isMounted.subscribe((isMounted) => {
      if (!isMounted)
        setTimeout(() => {
          this.popupService.isOpen.next(false);

          if (
            this.popupService.appendTo === "portal" &&
            this.popupService.overlayRef
          )
            this.popupService.overlayRef.detach();
        }, 200);
    });

    this.popupService.isOpen.subscribe((isOpen) => {
      if (isOpen)
        setTimeout(() => {
          this.popupService.isMounted.next(true);
        }, 0);
    });
  }

  ngAfterViewInit() {
    this.popupService.triggerRef = this.buttonRef;
  }
}
