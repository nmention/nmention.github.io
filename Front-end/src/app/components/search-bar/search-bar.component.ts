import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { synopsis } from '../synopsis/synopsis.component';
import * as $ from 'jquery';


interface MovieResult {
  results: any[];
}

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
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=627ac22760c37360d262266fadac96ed&append_to_response=credits&language=fr-FR`;
    return this.http.get<any>(url);
  }

  onSubmit() {
    this.searchMovies(this.searchTerm).subscribe((movies: any[]) => {
      const movie = movies[0];
      this.getMovieDetails(movie.id).subscribe(movieDetails => {
        this.synopsis = movieDetails.overview;
        const synopsis = document.getElementById('synopsis');
        if (synopsis != null) {
          if(this.synopsis != ""){
            synopsis.innerHTML = this.synopsis;
          }
          else{
            synopsis.innerHTML = "Pas de synopsis disponible.. :("
          }
        }
        const titre = document.getElementById('titre');
        if(titre != null){
          console.log(movieDetails.runtime)
          const quotient = Math.floor(movieDetails.runtime/60);
          const remainder = movieDetails.runtime % 60;

          let tmp = quotient.toString() + remainder.toString();


          titre.innerHTML = movieDetails.title + ' - '+ tmp.slice(0,1) + 'h' + tmp.slice(1) + ' / ' + movieDetails.genres[0].name;

        }
        const image = document.getElementById('image') as HTMLImageElement;
        if(image != null){
          image.src = "https://image.tmdb.org/t/p/w500/"+movieDetails.poster_path;
        }
        const acteurs = document.getElementById('acteurs');
        console.log(acteurs)
        if(acteurs != null){
          acteurs.innerHTML =""
          for (let i = 0 ; i < 5 ; i++) {
            acteurs.insertAdjacentHTML('beforeend','<div class="item">'+movieDetails.credits.cast[i].name+'</div>') ;
            console.log(acteurs)
          }
        }
        console.log(movieDetails);
      });
    });
  }

  onSearch() {
      this.http.get<MovieResult>(`https://api.themoviedb.org/3/search/movie?query=${this.searchTerm}&api_key=627ac22760c37360d262266fadac96ed&language=fr-FR`).subscribe(
        data => {
          this.movies = data.results;
          const datalistOptions = document.getElementById('datalistOptions');
          if (datalistOptions != null) {
            datalistOptions.innerHTML = '';
            this.movies.forEach(movie => {
              const option = document.createElement('option');
              option.value = movie.title;
              datalistOptions.appendChild(option);
          });
          }
        },
        error => {
          console.log(error);
        }
      );
  }
}
