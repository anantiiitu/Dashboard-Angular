import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  darkMode = false;

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;

    // Add logic here to apply dark/light mode styles to the application
    // For example, you can update the background color of the body or specific components based on the darkMode value
    // You can also store the user's preference in local storage or a shared service for persistence across page reloads
  }
}
