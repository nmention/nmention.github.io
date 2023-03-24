import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ActeursComponent } from './components/acteurs/acteurs.component';

import { synopsis } from './components/synopsis/synopsis.component';


import { SynopsisComponent } from './components/synopsis/synopsis.component';

import { MusicPlaylistComponent } from './components/music-playlist/music-playlist.component';
import {HttpClientModule} from "@angular/common/http";

import {SocketioService} from "./services/socketio.service";
import {FormsModule} from "@angular/forms";
import { SearchDirective } from './components/search-bar/search.directive';

//import { SynopsisComponent } from './components/synopsis/synopsis.component';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SearchBarComponent,
    FooterComponent,

    ActeursComponent,
     MusicPlaylistComponent,

     synopsis,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],


     SynopsisComponent,
      SearchDirective,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule

    ],
  providers: [SocketioService],

  bootstrap: [AppComponent]
})
export class AppModule { }
