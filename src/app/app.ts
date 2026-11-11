import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  imports: [RouterOutlet, ProfileCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  fullName = 'Daniella Faith Cortez';
  location = 'Angeles City, Pampanga';
  email = 'daniemendoza71@gmail.com';
  phone = '0915-798-9490';

  profile = 'I am a student major in web development. I enjoy learning something new that helps me utilize my skills that i can use for my future job.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Java',
    'MySQL',
    'Python'
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}

