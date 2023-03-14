import { Component, OnInit } from '@angular/core';
import {ApiService} from './../../services/api.service';

@Component({
  selector: 'app-movie-data',
  templateUrl: './movie-data.component.html',
  styleUrls: ['./movie-data.component.css']
})
export class MovieDataComponent implements OnInit {
  Films:any = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.GetFilms().subscribe(res => {
      this.Films = Object.values(res);
      console.log(this.Films);
    });
  }

}


