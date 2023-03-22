import { Component } from '@angular/core';

import * as $ from 'jquery';
import {SocketioService} from "../../services/socketio.service";


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  constructor(private socketIoService: SocketioService) {

  }

  enter(){
    this.socketIoService.socket.emit("requestMovies",()=>{
      console.log("Request de films");
    })
  }





}
