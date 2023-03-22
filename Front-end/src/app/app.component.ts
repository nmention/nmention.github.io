import {Component, OnInit} from '@angular/core'

import * as $ from "jquery";
import {SocketioService} from "./services/socketio.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Movie_track';


  constructor(private socketService : SocketioService) {
    this.socketService.initSocket();


  }


  ngOnInit(): void {
    $("#search").attr("placeholder", "Type here to search");

  }
}
