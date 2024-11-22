import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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



  createTimeConnection(temporaryTime: number, plasticCaps: number, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'x-token': token
    });

    const body = {
      temporaryTime,
      plasticCaps
    };

    return this._http.post<any>(`${apiUrl}/time-connections`, body, { headers });
  }


  getAllTimeConnections(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'x-token': token
    });

    return this._http.get<any>(`${apiUrl}/time-connections`, { headers });
  }

  updateTimeConnection(id: string, temporaryTime: number, plasticCaps: number, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'x-token': token
    });

    const body = {
      temporaryTime,
      plasticCaps
    };

    return this._http.put<any>(`${apiUrl}/time-connections/${id}`, body, { headers });
  }


  getUserLatestConnection(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'x-token': token
    });

    return this._http.get<any>(`${apiUrl}/time-connections/user`, { headers });
  }
}
