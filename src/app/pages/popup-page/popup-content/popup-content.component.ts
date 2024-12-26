import { Component, ElementRef, Input, ViewChild, inject } from "@angular/core";
import { PopupService } from "../popup.service";
import { CdkPortal, PortalModule } from "@angular/cdk/portal";
import { OverlayRef } from "@angular/cdk/overlay";
import { CommonModule, NgClass, NgTemplateOutlet } from "@angular/common";

@Component({
  selector: "app-popup-content",
  standalone: true,
  imports: [PortalModule, NgClass, NgTemplateOutlet, CommonModule],
  templateUrl: "./popup-content.component.html",
})
export class PopupContentComponent {
  @Input() className: string = "";
  @Input() animationClassName: string = "";
  @Input() position: "left-bottom" | "right-bottom" = "left-bottom";
  @Input() origin: "bottom-right" | "bottom-left" | "top-right" | "top-left" =
    "top-right";
  @Input() spacer: number = 8;

  popupService = inject(PopupService);
  @ViewChild(CdkPortal) portal: CdkPortal;

  @ViewChild("content", { read: ElementRef })
  content: ElementRef<HTMLDivElement>;

  @ViewChild("contentRef", { read: ElementRef })
  contentRef: ElementRef<HTMLDivElement>;

  @ViewChild("animationRef", { read: ElementRef })
  animationRef: ElementRef<HTMLDivElement>;

  setContentPos = () => {
    const triggerEle = this.popupService.triggerRef?.nativeElement;
    const contentEle = this.contentRef?.nativeElement;
    const animationEle = this.animationRef?.nativeElement;

    if (!triggerEle || !contentEle || !animationEle) return;

    const triggerRect = triggerEle.getBoundingClientRect();

    // default is left bottom
    const contentPos = {
      top: triggerRect.top + triggerEle.clientHeight,
      left: triggerRect.left - contentEle.clientWidth,
    };

    // handle other positions
    switch (this.position) {
      case "right-bottom": {
        contentPos.top =
          triggerRect.top + triggerEle.clientHeight + this.spacer;
        contentPos.left = triggerRect.left + triggerEle.clientWidth;
        break;
      }
    }

    const isOverScreenHeight =
      contentPos.top + contentEle.clientHeight > window.innerHeight - 90;
    if (isOverScreenHeight) {
      let newTop =
        contentPos.top - contentEle.clientHeight - triggerEle.clientHeight;

      if (newTop - 60 < 0) newTop = 60;
      contentPos.top = newTop;
    }

    if (animationEle) {
      let finalOrigin = origin;

      if (isOverScreenHeight) finalOrigin = "bottom right";

      animationEle.style.transformOrigin = finalOrigin;
    }

    contentEle.style.left = `${contentPos.left}px`;
    contentEle.style.top = `${contentPos.top}px`;
  };

  classes = {
    unMountedContent: "opacity-0 scale-[.95]",
    mountedContent: "opacity-100 scale-[1]",
  };

  // ngOnInit() {
  // this.popupService.isOpen.subscribe((isOpen) => {
  //   if (isOpen) {
  //     if (this.popupService.appendTo === "portal") this.setContentPos();
  //   }
  // });
  // }

  ngAfterViewInit() {
    if (this.popupService.appendTo === "portal")
      this.popupService.portal = this.portal;
  }

  // set content popsition if append to the parent
  ngAfterViewChecked() {
    if (this.popupService.isOpen.getValue()) {
      if (this.popupService.appendTo === "portal") this.setContentPos();
    }
  }
}
