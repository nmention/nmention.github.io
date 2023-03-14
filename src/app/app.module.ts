import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FooterComponent } from './components/footer/footer.component';

import { ActeursComponent } from './components/acteurs/acteurs.component';
import { MovieDataComponent } from './components/movie-data/movie-data.component';

import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SearchBarComponent,
    FooterComponent,

    ActeursComponent,
     MovieDataComponent,
  ],
  imports: [
    BrowserModule,

    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
