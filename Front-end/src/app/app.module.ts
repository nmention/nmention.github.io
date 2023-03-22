import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FooterComponent } from './components/footer/footer.component';

import { ActeursComponent } from './components/acteurs/acteurs.component';

import { SynopsisComponent } from './components/synopsis/synopsis.component';
import { MusicPlaylistComponent } from './components/music-playlist/music-playlist.component';
import {HttpClientModule} from "@angular/common/http";

import {SocketioService} from "./services/socketio.service";

//import { SynopsisComponent } from './components/synopsis/synopsis.component';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SearchBarComponent,
    FooterComponent,

    ActeursComponent,
     MusicPlaylistComponent,

     SynopsisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [SocketioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
