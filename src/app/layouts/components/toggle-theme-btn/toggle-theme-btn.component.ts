import { Component, inject } from "@angular/core";
import { ThemeService } from "../../services/theme.service";
import { CommonModule } from "@angular/common";
import { getLocalStorage } from "../../../../share/utils/appHelper";

@Component({
  selector: "app-toggle-theme-btn",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./toggle-theme-btn.component.html",
})
export class ToggleThemeBtnComponent {
  themeService = inject(ThemeService);
  



  toggleTheme() {
    this.themeService.toggle();
  }
}
