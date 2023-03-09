import {Component, OnInit} from '@angular/core'
import {ApiService} from './api.service';
import { PostService } from './services/post.service';

import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Movie_track';
  posts:any;
  constructor(private service:PostService) {}
  ngOnInit() {

      this.service.getPosts()

        .subscribe(response => {

          this.posts = response;

        });
  }
}
