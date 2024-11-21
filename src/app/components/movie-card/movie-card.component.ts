import { Component, Input, } from '@angular/core';
import { IMovie } from '../../interfaces/movie';
import { environment } from '../../../environments/environment.development';
import { RouterLink } from '@angular/router';


const imgUrl: string = environment.imgUrl;

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  /* Input - information of the movie received from the parent component */
  @Input() movieInfo!: IMovie;


  /**
   * getImageUrl takes a `posterPath` string as input and returns a string with the full path url.
   * @param {string} posterPath - The `posterPath` parameter is a string that represents the path to an file.
   * @returns returns a string with the full path url.
   */
  getImageUrl(posterPath: string): string {
    return imgUrl + posterPath;
  }
}
