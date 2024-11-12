import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]',
  standalone: true,
})
export class ClassDirective {
  constructor(private element: ElementRef, private render: Renderer2) {}

  @Input() set appClass(values: Object) {
    for (let item of Object.entries(values)) {
      const [value, con] = item;

      if (con) {
        this.render.addClass(this.element.nativeElement, value);
      } else this.render.removeClass(this.element.nativeElement, value);
    }
  }
}
