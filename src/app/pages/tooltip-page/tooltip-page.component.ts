import { Component } from '@angular/core';
import { TooltipComponent } from './tooltip/tooltip.component';
import { PopupComponent } from '../popup-page/popup/popup.component';
import { PopupTriggerComponent } from '../popup-page/popup-trigger/popup-trigger.component';
import { PopupContentComponent } from '../popup-page/popup-content/popup-content.component';
import { PopupWrapperComponent } from '../popup-page/popup-wrapper/popup-wrapper.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-tooltip-page',
  standalone: true,
  imports: [TooltipComponent, ButtonComponent, PopupComponent, PopupTriggerComponent, PopupContentComponent, PopupWrapperComponent],
  templateUrl: './tooltip-page.component.html',
})
export class TooltipPageComponent {

}
