import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FooterComponent } from './components/footer/footer.component';
<<<<<<< HEAD
import { ActeursComponent } from './components/acteurs/acteurs.component';
=======
import { HeaderComponent } from './components/header/header.component';
>>>>>>> 355077eade0cde82f8e077c41279a7fe90245a96




@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SearchBarComponent,
    FooterComponent,
<<<<<<< HEAD
    ActeursComponent,
=======
    HeaderComponent,
>>>>>>> 355077eade0cde82f8e077c41279a7fe90245a96


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
