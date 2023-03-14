import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

  

@Injectable({

  providedIn: 'root'

})

export class PostService {
  private url = 'https://api.themoviedb.org/3/search/movie?api_key=627ac22760c37360d262266fadac96ed&language=fr-FR&page=1&include_adult=false&query=Shrek';
  constructor(private httpClient: HttpClient) { }
  getPosts(arg : string){

    return this.httpClient.get(this.url + encodeURIComponent(arg));

  }

}