import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor (private http:HttpClient) {}
  getCountries(){return this.http.get('https://serpapi.com/search.json?q=eternals+theater&location=Austin,+Texas,+United+States&hl=en&gl=us'); 
  }
}
  
