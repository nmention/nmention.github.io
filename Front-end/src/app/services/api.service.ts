import { Injectable } from '@angular/core';
import {catchError,map} from "rxjs";
import {Observable,throwError} from "rxjs";
import {HttpClient,HttpHeaders,HttpErrorResponse} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  REST_API : string = "http://127.0.0.1:3080/Movies";

  constructor(private HttpClient:HttpClient) { }


  getMoviesDetails(){
    console.log(this.HttpClient.get(`${this.REST_API}`));
    return this.HttpClient.get(`${this.REST_API}`);
  }
}
