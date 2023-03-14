import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  query = '';
  results: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  search() {
    this.http.get('https://api.serpapi.com/v1/search?q=' + this.query + '&api_key=VOTRE_CLE_API')
      .subscribe(data => {
        this.results = data;
        console.log(this.results);
      });
  }
}
