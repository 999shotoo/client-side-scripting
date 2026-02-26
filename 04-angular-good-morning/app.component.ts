import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Good Morning App';
  message = 'Good Morning';
  currentTime: string;
  greeting: string;

  constructor() {
    this.currentTime = this.getCurrentTime();
    this.greeting = this.getGreeting();
  }

  getCurrentTime(): string {
    const now = new Date();
    return now.toLocaleTimeString();
  }

  getGreeting(): string {
    const hour = new Date().getHours();
    if (hour < 12) {
      return 'Good Morning';
    } else if (hour < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  }

  refreshGreeting(): void {
    this.currentTime = this.getCurrentTime();
    this.greeting = this.getGreeting();
  }
}
