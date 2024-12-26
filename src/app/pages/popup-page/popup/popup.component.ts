import { Component, Input, inject } from "@angular/core";
import { PopupService } from "../popup.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-popup",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./popup.component.html",
  providers: [PopupService],
})
export class PopupComponent {
  @Input() appendTo: "parent" | "portal" = "portal";

  popupSerice = inject(PopupService);

  ngOnInit() {
    this.popupSerice.appendTo = this.appendTo;
  }
}
