import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Injectable,
  ViewChild,
  inject,
} from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayerService } from './player.service';
import { AudioService } from './audio.service';
import { NgIf } from '@angular/common';
import { GetSongService } from './getSong.service';
import { PlayingService } from './playing.service';

@Component({
  selector: 'app-music-player',
  standalone: true,
  imports: [DashboardComponent, NgIf],
  providers: [PlayerService, AudioService, GetSongService, PlayingService],
  templateUrl: './music-player.component.html',
})
export class MusicPlayerComponent {
  audioService = inject(AudioService);
  getSongService = inject(GetSongService);
  playerService = inject(PlayerService);

  isFetching = true;

  @ViewChild('audioRef', { read: ElementRef, static: true })
  audioRef: ElementRef<HTMLAudioElement>;


  ngOnInit() {
    this.getSongService.getSong();
  }

  ngAfterViewInit() {
    if (this.audioRef?.nativeElement) {
      this.audioService.audioEleSubj.next(this.audioRef.nativeElement);
    }
  }
}
