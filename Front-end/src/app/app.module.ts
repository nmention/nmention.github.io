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
  bootstrap: [AppComponent]
})
export class AppModule { }
