import { NgClass } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-popup-wrapper",
  standalone: true,
  imports: [NgClass],
  templateUrl: "./popup-wrapper.component.html",
})
export class PopupWrapperComponent {
  classes = {
    menuItem:
      "*:px-3 *:py-1 *:flex *:items-center  *:space-x-1 hover:[&>*:not(div.absolute)]:bg-[#f4f6f8] hover:[&>*]:text-[#cd1818]",
  };
}
