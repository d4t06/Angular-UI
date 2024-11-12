import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../components/sidebar/sidebar.component";

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.css'
})
export class DefaultLayoutComponent {

}
