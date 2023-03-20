import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-synopsis',
  templateUrl: './synopsis.component.html',
  styleUrls: ['./synopsis.component.css']
})
export class SynopsisComponent implements OnInit{

  MovieDetails : any = [];

  constructor(private apiService:ApiService) {
  }
  ngOnInit(): void {

    this.apiService.getMoviesDetails().subscribe(res =>{

      console.log(res);
      this.MovieDetails = res;
    });
  }

}
