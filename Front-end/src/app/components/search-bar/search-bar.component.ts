import {AfterViewInit, Component, ViewChild} from '@angular/core';

import * as $ from 'jquery';
import {SocketioService} from "../../services/socketio.service";


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements AfterViewInit{

  value : string;
  color = 'blue';

  optionss : any
  constructor(private socketIoService: SocketioService) {
    this.value = '';
  }


  @ViewChild('search') input:any;



  enter(){
    this.socketIoService.socket.emit("requestMovies",()=>{
      console.log("Request de films");
    })
  }


  setValue(){
    this.value = "HEYYYY";
    console.log(this.value);
  }

  ngAfterViewInit(): void {
    console.log("Interface disponible");
    console.log(this.input.nativeElement.value);
  }


  setoptionss(valeur:any){
    this.optionss = valeur;
  }





}
