import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]',
  standalone: true,
})
export class StyleDirective {
  constructor(private element: ElementRef, private render: Renderer2) {}

  @Input() set appStyle(obj: Object) {
    for (let item of Object.entries(obj)) {
      const [style, value] = item;
      this.render.setStyle(this.element.nativeElement, style, value);
    }
  }
}
