import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { ROUTES } from '../../../../route';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonComponent } from '../../../components/button/button.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive, ButtonComponent, NgTemplateOutlet],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  expand = true;

  classes = {
    container:
      'bg-[#fff] border-r border-black/15 transition-[width] h-[100vh] relative flex-shrink-0 w-[50px] sm:w-[70px]',
    containerExpand: '!w-[180px]',
    head: 'h-[60px] flex items-center justify-center',
    logoText: 'text-[22px] font-[500] whitespace-nowrap tracking-[-1px]',
    logoImage: 'max-w-[50px] p-[4px]',
    item: 'flex whitespace-nowrap space-x-[6px] items-center justify-center p-[10px] text-[#333] hover:text-[#cd1818] hover:bg-[#f8f8f8]',
    itemActive: 'text-[#cd1818] bg-[#f1f1f1]',
    icon: 'w-[24px] flex-shrink-0',
  };

  toggleExpand() {
    this.expand = !this.expand;
  }

  ROUTES = ROUTES;
}
