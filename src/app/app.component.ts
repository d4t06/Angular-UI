import { Component } from '@angular/core';
import { NgSwitch, NgSwitchCase, CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DefaultLayoutComponent,
    CommonModule,
    NgSwitch,
    NgSwitchCase,
    AuthLayoutComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    console.log('app constructor');
    
  }

  layout: '' | 'default' | 'auth' | 'dashboard' = '';

  ngOnInit() {

    console.log('app init');
    

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.layout =
          this.activatedRoute.firstChild?.snapshot.data['layout'] || 'default';
      }
    });
  }
}
