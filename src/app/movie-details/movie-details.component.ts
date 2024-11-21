import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovieDetails } from '../interfaces/movie';
import { MovieService } from '../services/movie.service';
import { environment } from '../../environments/environment.development';

const imgUrl = environment.imgUrl;

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {
  /* Implement MovieService to query a movie by id */
  private _movieService = inject(MovieService);
  /* IImplement ActivatedRoute to receive the movie ID via url parameters. */
  private _route = inject(ActivatedRoute);

  movieId: string = '';
  movieInfo!: IMovieDetails;


  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.movieId = params['movieId'];
      console.log(params['movieId'])
      this.loadMovieById(Number(this.movieId));
    });
  }

  loadMovieById(movieId: number) {
    this._movieService.getMovieById(movieId).subscribe({
      next: (resp: any) => {
        console.log(resp)
        this.movieInfo = resp as IMovieDetails;
        console.log(resp);
      },
      error: (error) => console.log('Error feching movie by id: ' + error)
    });
  }


  /**
   * getImageUrl takes a `posterPath` string as input and returns a string with the full path url.
   * @param {string} posterPath - The `posterPath` parameter is a string that represents the path to an file.
   * @returns returns a string with the full path url.
   */
  getImageUrl(posterPath: string): string {
    return imgUrl + posterPath;
  }
}
