import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Movie } from '../models/movie';

const API_PATH = 'https://653deb57f52310ee6a9a6468.mockapi.io/';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  constructor(private http: HttpClient) { }


  getMoviesListas(): Observable<Movie[]> {
    const path = API_PATH + 'movies';

    return this.http.get<Movie[]>(path);
  }

}