import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { IMovie, IMovieDetails } from '../interfaces/movie';
import { Observable } from 'rxjs';


/* url of "The Movie Database" api credentials extracted from Environment*/
const apiUrl = `${environment.apiUrl}/movie`;
const apiUrlSearch = `${environment.apiUrl}/search/movie`;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  /*  Allows the `MovieService` class to make HTTP requests using the `HttpClient` service to communicate with an API.  */
  private _http = inject(HttpClient);

  constructor() { }

  /**
   * getAllPopularMovies makes an HTTP GET request to retrieve popular movies using a specified API key.
   * @returns Return an Observable of type IMovie.
   */
  getAllPopularMovies(): Observable<IMovie> {
    return this._http.get<IMovie>(`${apiUrl}/popular?api_key=${apiKey}`);
  }


  /**
   * getAllMoviesByType retrieves all movies of a specified type using an API call.
   * @param {string} type - The `type` parameter is a string that represents the type of movies you want to retrieve. 
   * @param {number} currentPage - The `currentPage`represents the page number of the results you want to retrieve. 
  * @returns Return an Observable of type IMovie.
   */
  getAllMoviesByType(type: string, currentPage: number): Observable<IMovie> {
    return this._http.get<IMovie>(`${apiUrl}/${type}?api_key=${apiKey}&language=es-MX&page=${currentPage}`);
  }


  /**
   * getMovieById searches for a movie by Id via an API call.
   * @param {string} movieId - The `movieId` parameter is a number representing the id of the movie you want to retrieve. 
   * @returns Return an Observable of type IMovieDetails.
   */
  getMovieById(movieId: number): Observable<IMovieDetails> {
    return this._http.get<IMovieDetails>(`${apiUrl}/${movieId}?api_key=${apiKey}&language=es-MX`);
  }

/**
   * getAllMoviesByQuery retrieves all movies by querying through an API call.
   * @param {string} query - The `query` is a string representing the query parameter of the movie you want to retrieve. 
   * @param {number} currentPage - The `currentPage`represents the page number of the results you want to retrieve. 
  * @returns Return an Observable of type IMovie.
   */
  getAllMoviesByQuery(query: string, currentPage: number): Observable<IMovie> {
    return this._http.get<IMovie>(`${apiUrlSearch}?query=${query}&api_key=${apiKey}&language=es-MX&page=${currentPage}`);
  }

}
