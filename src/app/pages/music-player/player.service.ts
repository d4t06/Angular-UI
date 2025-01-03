import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Tab = 'playing' | 'queue';
@Injectable()
export class PlayerService {
  songs: Song[] = [];
  songsSubj = new BehaviorSubject<Song[]>([]);

  currentSong: Song | null = null;
  tab: Tab = 'playing';
  tabSubj = new BehaviorSubject<Tab>('playing');

  currentIndexSubj = new BehaviorSubject<number | null>(null);
  currentIndex: number | null = null;

  playerRef = ElementRef<HTMLAudioElement>;

  setCurrentSong = (index: number) => {
    //  this.currentIndexSubj.next(index);
    /*
    at this time when currentIndexSubj fire subscribe event
    currentSong still no update yet
    */

    this.currentIndex = index;
    this.currentSong = this.songs[index];

    this.currentIndexSubj.next(index);
  };

  setTab = (tab: Tab) => {
    this.tabSubj.next(tab);
    this.tab = tab;
  };
}
