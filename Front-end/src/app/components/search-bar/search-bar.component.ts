import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { synopsis } from '../synopsis/synopsis.component';
import * as $ from 'jquery';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchTerm= "";
  movies: any[] = [];
  synopsis = "";
  constructor(private http: HttpClient) { }

  searchMovies(term: string): Observable<{id: number, title: string}[]> {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=627ac22760c37360d262266fadac96ed&query=${term}`;
    return this.http.get<any>(url).pipe(
      map(response => response.results),
      map(movies => movies.map((movie: { id: any; title: any; }) => {
        return {
          id: movie.id,
          title: movie.title
        }
      }))
    );
  }
  

  getMovieDetails(movieId: number) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=627ac22760c37360d262266fadac96ed&append_to_response=credits`;
    return this.http.get<any>(url);
  }

  onSubmit() {
    this.searchMovies(this.searchTerm).subscribe((movies: any[]) => {
      const movie = movies[0];
      this.getMovieDetails(movie.id).subscribe(movieDetails => {
        this.synopsis = movieDetails.overview;
      });
    });
  }
  
} 
