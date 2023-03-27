import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { synopsis } from '../synopsis/synopsis.component';
import * as $ from 'jquery';
import { google } from 'googleapis';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


interface MovieResult {
  results: any[];
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent  {
  searchTerm= "";
  movies: any[] = [];
  synopsis = "";
  tmdbApiKey = '627ac22760c37360d262266fadac96ed';
  youtubeApiKey = 'AIzaSyAvQNFmNAkZokEdW3m8sgsKxzQiWJxDoxw';
  videoId: string = '';


  constructor(private http: HttpClient,private sanitizer: DomSanitizer,) { }

  public getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

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
        const synopsis_container = document.getElementById("synopsis_container")
        if (synopsis != null) {
          if(this.synopsis != ""){
            synopsis.innerHTML = this.synopsis;
            synopsis_container!.style.display = 'block';
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
        const card = document.getElementById('card');
        if(image != null){
          image.src = "https://image.tmdb.org/t/p/w500/"+movieDetails.poster_path;
          card!.style.display = 'block';
        }
        const acteurs = document.getElementById('acteurs');
        if(acteurs != null){
          acteurs.innerHTML =""
          for (let i = 0 ; i < 5 ; i++) {
            acteurs.insertAdjacentHTML('beforeend','<span class="item">'+movieDetails.credits.cast[i].name+'</span>') ;
          }
          actors!.style.display = "block"
        }
      });
    });
    this.getMovieTrailer(this.searchTerm)
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

  getMovieTrailer(movieName: string) {
    // Step 1: Search for movie in TMDB API
    let searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${this.tmdbApiKey}&query=${movieName}&language=fr`;
    this.http.get(searchUrl).subscribe((data: any) => {
      // Step 2: Get movie details from TMDB API
      if (data && data.results && data.results.length > 0) {
        let movieId = data.results[0].id;
        let detailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.tmdbApiKey}&language=fr`;
        this.http.get(detailsUrl).subscribe((movieData: any) => {
          // Step 3: Search for movie trailer on YouTube API
            let trailerName = `${movieData.title} bande annonce vf`;
            let searchUrl = `https://www.googleapis.com/youtube/v3/search?key=${this.youtubeApiKey}&part=id&q=${trailerName}`;
            this.http.get(searchUrl).subscribe((youtubeData: any) => {
              // Step 4: Get video ID and display in console
              if (youtubeData.items && youtubeData.items.length > 0) {
                this.videoId = youtubeData.items[0].id.videoId;

              }
            });
        });
      }
    });
  }

  
} 
