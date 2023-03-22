import {AfterViewInit, Component, ViewChild} from '@angular/core';

import * as $ from 'jquery';
import {SocketioService} from "../../services/socketio.service";


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements AfterViewInit{
  constructor(private socketIoService: SocketioService) {

  }

  @ViewChild('search') input:any;



  enter(){
    this.socketIoService.socket.emit("requestMovies",()=>{
      console.log("Request de films");
    })
  }

  ngAfterViewInit(): void {
    console.log("Interface disponible");
    console.log(this.input.nativeElement.value);
  }





}
