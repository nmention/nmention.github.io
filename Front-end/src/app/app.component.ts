import {Component, OnInit} from '@angular/core'

import * as $ from "jquery";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Movie_track';

  ngOnInit(): void {
    $("#search").attr("placeholder", "Type here to search");

  }
}
