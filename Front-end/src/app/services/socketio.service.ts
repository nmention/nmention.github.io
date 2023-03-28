import { Injectable } from '@angular/core';

import { io } from 'socket.io-client';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  socket:any;


  constructor() { }


  initSocket(){
    this.socket = io("http://127.0.0.1:3080");
  }
}
