import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results: any;
  
  constructor(private http: HttpClient) {
    this.http.get('https://api.serpapi.com/v1/search?q=apple&api_key=VOTRE_CLE_API')
      .subscribe(data => {
        this.results = data;
        console.log(this.results);
      });
  }
}
