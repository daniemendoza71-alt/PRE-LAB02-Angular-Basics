import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-profile-card',
  styleUrl: './profile-card.css',
  templateUrl: './profile-card.html',
})
export class ProfileCard {cardTitle = 'A Little About Me';
  description = 'I am a 3rd year student learning to build modern, responsive, and user-friendly web applications using Angular, HTML, CSS, and JavaScript.';
}
