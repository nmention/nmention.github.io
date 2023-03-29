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




import { MusicPlaylistComponent } from './components/music-playlist/music-playlist.component';

import { YoutubePlayerComponent } from './components/youtube-player/youtube-player.component';


//import { SynopsisComponent } from './components/synopsis/synopsis.component';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FooterComponent,
    SearchBarComponent,
    ActeursComponent,
    MusicPlaylistComponent,
    synopsis,
     YoutubePlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],

  bootstrap: [AppComponent],

})
export class AppModule { }
