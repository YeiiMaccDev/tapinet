import { Component } from '@angular/core';

@Component({
  selector: 'app-times',
  standalone: true,
  imports: [],
  templateUrl: './times.component.html',
  styleUrl: './times.component.css'
})
export class TimesComponent {

  redirectToGoogle() {
    window.location.href = 'https://www.google.com/';
  }
}
