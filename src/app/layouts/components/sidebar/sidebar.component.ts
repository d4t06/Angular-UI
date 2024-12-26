import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, HostBinding, inject } from '@angular/core';
import { ROUTES } from '../../../../route';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonComponent } from '../../../components/button/button.component';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass, RouterLink, ButtonComponent, NgTemplateOutlet, RouterLinkActive],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  themeService = inject(ThemeService)

  @HostBinding('class') hostClass= 'h-full'

  expand = true;

  classes = {
    container:
      `border-r transition-[width] h-full relative flex-shrink-0 w-[50px] sm:w-[70px]`,
    containerExpand: '!w-[180px]',
    head: 'h-[60px] flex items-center justify-center',
    logoText: 'text-[22px] font-[500] whitespace-nowrap tracking-[-1px]',
    logoImage: 'max-w-[50px] p-[4px]',
    item: 'flex whitespace-nowrap space-x-[6px] items-center justify-center p-2 hover:text-[#cd1818] hover:bg-[#f8f8f8]',
    itemActive: 'text-[#cd1818] bg-[#f1f1f1]',
    icon: 'w-[24px] flex-shrink-0',
  };

  toggleExpand() {
    this.expand = !this.expand;
  }

  ROUTES = ROUTES;
}
