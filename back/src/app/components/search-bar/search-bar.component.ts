import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as $ from 'jquery';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  maValeur: string = '';

  onEnter(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      console.log(this.maValeur);
    }
  }

}
