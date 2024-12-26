import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ThemeService } from './layouts/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DefaultLayoutComponent, CommonModule, AuthLayoutComponent],
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
