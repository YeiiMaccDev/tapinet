import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule, ReactiveFormsModule, MovieComponent, ReactiveFormsModule, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movies-app';
}
