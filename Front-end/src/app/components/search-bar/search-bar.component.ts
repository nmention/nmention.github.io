import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import * as $ from 'jquery';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  maRecherche= "";

  constructor() { }

  search() {
    console.log(this.maRecherche);
  }
  onInputChange() {
    if(this.maRecherche != ""){
      console.log(this.maRecherche);
    }
  }} 
