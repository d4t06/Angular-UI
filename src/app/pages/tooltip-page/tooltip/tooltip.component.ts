import { CommonModule, NgClass, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  Optional,
  ViewChild,
} from '@angular/core';
import { PopupService } from '../../popup-page/popup.service';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [NgClass, NgTemplateOutlet, CommonModule],
  templateUrl: './tooltip.component.html',
})
export class TooltipComponent {
  @Input() className = 'px-2 py-1 text-sm font-[600]';
  @Input() position = 'bottom-[calc(100%+8px)]';
  @Input() contentText: string = 'tooltip content';
  @Input() wrap: boolean = true;


  @ViewChild('triggerRef', { read: ElementRef })
  triggerRef: ElementRef<HTMLElement>;

  open = false;

  constructor(@Optional() public popupService: PopupService) {}

  handleMouseEnter = () => {
    this.open = true;
  };

  handleMouseLeave = () => {
    this.open = false;
  };

  ngOnInit() {
    // if (this.popupService) {
    //   this.popupService.isOpen.subscribe((isOpen) => {
    //     if (isOpen) this.open = false;
    //   });
    // }
  }

  ngAfterViewInit() {
    const targetElement = !!this.popupService
      ? this.popupService.triggerRef.nativeElement
      : this.triggerRef.nativeElement;

    targetElement.addEventListener('mouseenter', this.handleMouseEnter);
    targetElement.addEventListener('mouseleave', this.handleMouseLeave);
  }

  classes = {
    container: `bg-slate-700 text-white`,
  };
}
