import { Injectable } from '@angular/core';

import { io } from 'socket.io-client';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  socket:any;
  env:any = environment;



  constructor() {
    console.log(this.env.production);
    console.log(this.env.SOCKET_DEST);

  }


  initSocket(){

    this.socket = io(this.env.SOCKET_DEST);
  }
}
