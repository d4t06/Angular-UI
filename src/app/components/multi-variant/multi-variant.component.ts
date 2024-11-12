import { Component, Input } from '@angular/core';

type Add = {
  variant: 'add';
};

type Edit = {
  variant: 'edit';
  index: number;
};

@Component({
  selector: 'app-multi-variant',
  standalone: true,
  imports: [],
  templateUrl: './multi-variant.component.html',
  styleUrl: './multi-variant.component.css',
})
export class MultiVariantComponent {
  @Input()
  props!: Add | Edit;



  handleSubmit() {


    switch(this.props.variant) {
      case 'add':

      break;
      case 'edit':
        this.props.index
    }
  }
}
