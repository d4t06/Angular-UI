import { Component, inject } from '@angular/core';
import { PlayerService } from '../player.service';
import { SongListItemComponent } from '../song-list-item/song-list-item.component';
import { NgClass, NgFor } from '@angular/common';
import { scroll } from '../../../../share/utils/appHelper';
import { PlayingService } from '../playing.service';

@Component({
  selector: 'app-song-list',
  standalone: true,
  imports: [SongListItemComponent, NgFor],
  templateUrl: './song-list.component.html',
})
export class SongListComponent {
  playerService = inject(PlayerService);
  playingService = inject(PlayingService);

  handleSetSong = (i: number) => {
    this.playingService.firstTimeSongLoaded = false;
    this.playerService.setCurrentSong(i);
  };

  handleWindowClick: EventListener = (e) => {
    const $ = document.querySelector.bind(document);

    const buttons = [$('.queue-btn')];
    const dashboard = $('.dashboard');
    const target = e.target as Node;

    if (
      !dashboard ||
      dashboard.contains(target) ||
      !!buttons.find((btn) => btn?.contains(target))
    )
      return;

    this.playerService.setTab('playing');
  };

  constructor() {
    this.playerService.tabSubj.subscribe((tab) => {
      if (tab === 'queue') {
        //  window.addEventListener('click', this.handleWindowClick);
        //  window is not available on mobile
        document.addEventListener('click', this.handleWindowClick);

        const activeSongEle = document.querySelector('.active-song-item');
        if (activeSongEle) scroll(activeSongEle);
      } else document.removeEventListener('click', this.handleWindowClick);
    });
  }
}
