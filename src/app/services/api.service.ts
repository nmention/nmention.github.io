import { Injectable } from '@angular/core';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  REST_API: string = 'https://api.themoviedb.org/3/search/movie?api_key=627ac22760c37360d262266fadac96ed&language=fr-FR&page=1&include_adult=false&query=Shrek';
  constructor(private httpClient: HttpClient) { }

  GetBooks(){
    console.log(this.httpClient.get(`${this.REST_API}`));
    return this.httpClient.get(`${this.REST_API}`);

    
  }
}
