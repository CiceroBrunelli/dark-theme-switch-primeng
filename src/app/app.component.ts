import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwitchThemeComponent } from "./components/switch-theme/switch-theme.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SwitchThemeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dark-theme-switch-primeng';
}
