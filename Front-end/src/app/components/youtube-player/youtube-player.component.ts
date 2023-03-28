import { Component, OnInit, Optional } from '@angular/core';
import {SearchBarComponent} from '../search-bar/search-bar.component'

declare var window: any;

@Component({
  selector: 'app-youtube-player',
  template: '<div id="player"></div>',
})
export class YoutubePlayerComponent implements OnInit{
  static player : any
  isPlayerReady = false;

  ngOnInit(): void {
    window['onYouTubeIframeAPIReady'] = () => {
        YoutubePlayerComponent.player = new window['YT'].Player('player', {
        height: '360',
        width: '640',
      });
    };
  }

  getVideo(videoId: string): void {
      YoutubePlayerComponent.player.loadVideoById(videoId);
      YoutubePlayerComponent.player.pauseVideo();
  }
}


