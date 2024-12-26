import { Component, inject } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { ToggleThemeBtnComponent } from "../components/toggle-theme-btn/toggle-theme-btn.component";
import { ThemeService } from "../services/theme.service";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-default-layout",
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, ToggleThemeBtnComponent, NgClass],
  templateUrl: "./default-layout.component.html",
  styleUrl: "./default-layout.component.css",
})
export class DefaultLayoutComponent {

   themeService = inject(ThemeService)

}
