import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type Status = 'playing' | 'paused' | 'waiting' | 'error';

@Injectable()
export class AudioService {
  audioEle: HTMLAudioElement | undefined;
  audioEleSubj = new BehaviorSubject<HTMLAudioElement | undefined>(undefined);

  status: Status = 'paused';
  isClickPlay = false;

  play = async () => {
    try {
      await this.audioEle?.play();
      this.isClickPlay = true;
    } catch (error) {}
  };

  pause = () => {
    this.audioEle?.pause();
  };

  handlePlayPause = () => {
    this.status === 'playing'
      ? this.pause()
      : this.status === 'paused' && this.play();
  };

  handlePlaying = () => {
    this.status = 'playing';
  };

  handleWaiting = () => {
    this.status = 'waiting';
  };

  handlePaused = () => {
    this.status = 'paused';
  };

  handleError = () => {
    if (!this.audioEle?.currentSrc) this.status = 'paused';
    else this.status = 'error';
  };

  seek = (time: number) => {
    if (!!this.audioEle) this.audioEle.currentTime = time;
  };

  forward = (second: number) => {
    if (this.audioEle) {
      this.audioEle.currentTime = this.audioEle.currentTime + second;
    }
  };
  backward = (second: number) => {
    if (this.audioEle)
      this.audioEle.currentTime = this.audioEle.currentTime - second;
  };

  constructor() {
    this.audioEleSubj.subscribe((audioEle) => {
      if (!audioEle) return;

      this.audioEle = audioEle;

      audioEle.addEventListener('error', this.handleError);
      audioEle.addEventListener('pause', this.handlePaused);
      audioEle.addEventListener('playing', this.handlePlaying);
      audioEle.addEventListener('waiting', this.handleWaiting);
    });
  }
}
