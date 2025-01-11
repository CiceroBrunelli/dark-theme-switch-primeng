import { Component, OnInit } from '@angular/core';
import { InputSwitchModule } from 'primeng/inputswitch'; // Import the InputSwitchModule 
import { FormsModule } from '@angular/forms'; // Import the FormsModule
import { ThemeService } from '../../services/theme.service'; // Import the ThemeService

@Component({
  selector: 'app-switch-theme',
  imports: [InputSwitchModule, FormsModule], // Add the InputSwitchModule and FormsModule to the imports array
  templateUrl: './switch-theme.component.html',
  styleUrl: './switch-theme.component.scss'
})
export class SwitchThemeComponent implements OnInit {

  isDarkMode: boolean = false;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    // Inicializa o estado do switch com base no tema atual
    const currentTheme = localStorage.getItem('app-theme');
    this.isDarkMode = currentTheme === 'dark';
  }

  toggleDarkMode() {
    this.isDarkMode = this.themeService.toggleDarkMode();
  }

}
