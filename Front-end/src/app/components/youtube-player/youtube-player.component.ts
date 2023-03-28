import {Component, OnInit, Optional} from '@angular/core';
import {SearchBarComponent} from '../search-bar/search-bar.component'

declare var window: any;

@Component({
  selector: 'app-youtube-player',
  template: '<div id="player"></div>',
})
export class YoutubePlayerComponent implements OnInit{


  constructor(@Optional() private bar: SearchBarComponent) {}


  ngOnInit(): void {
      window.onYouTubeIframeAPIReady = () => {
        this.player = new window.YT.Player('player', {
          height: '360',
          width: '640',
          videoId: this.bar.videoId
        });
      };
  }



  player: any;

}


