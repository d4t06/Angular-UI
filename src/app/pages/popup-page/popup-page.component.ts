import { Component } from "@angular/core";
import { PopupComponent } from "./popup/popup.component";
import { PopupTriggerComponent } from "./popup-trigger/popup-trigger.component";
import { PopupContentComponent } from "./popup-content/popup-content.component";
import { PopupWrapperComponent } from "./popup-wrapper/popup-wrapper.component";

@Component({
   selector: 'app-popup-page',
   standalone: true,
   imports: [PopupComponent, PopupTriggerComponent, PopupContentComponent, PopupWrapperComponent],
   templateUrl: './popup-page.component.html',
 })
 export class PopupPageComponent {


 }
 