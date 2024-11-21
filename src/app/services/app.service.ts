import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { IMovie, IMovieDetails } from '../interfaces/movie';
import { Observable } from 'rxjs';


/* url of "The Movie Database" api credentials extracted from Environment*/
const apiUrl = `${environment.apiUrl}`;
const apiUrlSearch = `${environment.apiUrl}/search/movie`;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class AppService {
  /*  Allows the `MovieService` class to make HTTP requests using the `HttpClient` service to communicate with an API.  */
  private _http = inject(HttpClient);

  constructor() { }

  login(email: string, password: string): Observable<any> {
    return this._http.post<any>(`${apiUrl}/auth/login`, { email, password });
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this._http.post<any>(`${apiUrl}/users`, { name, email, password });
  }

}
