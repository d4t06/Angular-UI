import { Injectable, inject } from '@angular/core';
import { AudioService } from './audio.service';
import { PlayerService } from './player.service';
import {
  formatTime,
  getLocalStorage,
  setLocalStorage,
} from '../../../share/utils/appHelper';

@Injectable()
export class PlayingService {
  audioService = inject(AudioService);
  playerService = inject(PlayerService);

  isPlayedAllSong = false; // for handle song end
  firstTimeSongLoaded = true; // for update song current time

  currentTimeTextEle: HTMLDivElement;
  timeLineEle: HTMLDivElement;
  timeLineHolderEle: HTMLDivElement;

  play = async (props: { updateTime?: boolean } | undefined = {}) => {
    try {
      if (!this.audioService.audioEle) return;

      if (this.firstTimeSongLoaded) {
        this.firstTimeSongLoaded = false;

        if (props.updateTime) {
          const storage = getLocalStorage();

          const currentTime = storage['current_time'] || 0;
          this.audioService.audioEle.currentTime = currentTime;
        }
      }

      await this.audioService.audioEle.play();
    } catch (error) {}
  };

  handlePlayPause = () => {
    if (
      this.playerService.currentIndex === null &&
      this.playerService.songs.length
    ) {
      const randomIndex = Math.round(
        Math.random() * this.playerService.songs.length - 1
      );

      return this.playerService.currentIndexSubj.next(randomIndex);
    }

    this.audioService.status === 'playing'
      ? this.audioService.pause()
      : this.audioService.status === 'paused' &&
        this.play({ updateTime: true });
  };

  updateTimeProgressEle = (time: number) => {
    if (!this.audioService.audioEle) return;
    if (this.timeLineHolderEle && this.timeLineEle) {
      if (time === 0) {
        this.timeLineEle.style.background = 'rgba(255,255,255,.3)';
        this.timeLineHolderEle.style.left = `0%`;
      } else {
        const ratio = time / (this.audioService.audioEle.duration / 100);
        this.timeLineEle.style.background = `linear-gradient(to right, #fde68a ${ratio}%, rgba(255,255,255,.3) ${ratio}%, rgba(255,255,255,.3) 100%)`;
        this.timeLineHolderEle.style.left = `${ratio}%`;
      }
    }
    if (this.currentTimeTextEle)
      this.currentTimeTextEle.innerText = formatTime(time) || '0:00';
  };

  handleSeek = (e: MouseEvent) => {
    const node = e.target as HTMLElement;
    if (!this.audioService.audioEle) return;
    if (this.timeLineEle) {
      const clientRect = node.getBoundingClientRect();
      const length = e.clientX - clientRect.left;
      const lengthRatio = length / this.timeLineEle.clientWidth;
      const newSeekTime = lengthRatio * this.audioService.audioEle.duration;
      this.audioService.audioEle.currentTime = newSeekTime;
      this.updateTimeProgressEle(newSeekTime);
    }
  };

  handleNext = () => {
    if (this.playerService.currentIndex === null) return;

    let newIndex = this.playerService.currentIndex + 1;

    if (newIndex > this.playerService.songs.length - 1) newIndex = 0;

    this.playerService.setCurrentSong(newIndex);
  };

  handlePrevious = () => {
    if (this.playerService.currentIndex === null) return;

    let newIndex = this.playerService.currentIndex - 1;
    if (newIndex < 0) newIndex = this.playerService.songs.length - 1;

    this.playerService.setCurrentSong(newIndex);

    // this.playerService.currentIndexSubj.next(newIndex);
  };

  handleTimeUpdate = () => {
    if (!this.audioService.audioEle) return;
    const currentTime = this.audioService.audioEle?.currentTime;

    /** because playing event only fire onnce
     * there for we need to set playing status after time update
     * but only set playing status if song is paused
     */
    if (this.audioService.status === 'waiting')
      this.audioService.status = 'playing';

    this.updateTimeProgressEle(currentTime);

    if (Math.round(currentTime) % 3 === 0)
      setLocalStorage('current_time', Math.round(currentTime));
  };

  handleEnded = () => {
    const storage = getLocalStorage();

    const timer = storage['timer'];

    if (!!timer && timer !== 1) return this.handleNext();

    if (
      timer === 1 ||
      this.playerService.currentIndex === this.playerService.songs.length - 1
    )
      this.isPlayedAllSong = true;

    this.handleNext();
  };

  handleLoadStart = () => {
    if (this.playerService.currentIndex !== null)
      this.audioService.status = 'waiting';
  };

  handleLoaded = () => {
    if (this.isPlayedAllSong) {
      this.isPlayedAllSong = false;
      this.audioService.status = 'paused';
      return;
    }

    if (this.playerService.currentSong) {
      setLocalStorage('current', this.playerService.currentSong.id);
    }

    if (this.firstTimeSongLoaded) {
      this.audioService.status = 'paused';

      const storage = getLocalStorage();

      const currentTime = storage['current_time'] || 0;
      this.updateTimeProgressEle(currentTime);
      return;
    }

    this.play();
  };

  constructor() {
    // get local storage
    this.playerService.songsSubj.subscribe((songs) => {
      if (!songs.length) return;
      const storage = getLocalStorage();

      const currentId = storage['current'] || null;
      if (currentId) {
        const index = songs.findIndex((s) => s.id === currentId);
        if (index !== -1) this.playerService.setCurrentSong(index);
      } else this.firstTimeSongLoaded = false;
    });

    // add event
    this.audioService.audioEleSubj.subscribe((audioEle) => {
      if (!audioEle) return;

      audioEle.addEventListener('timeupdate', this.handleTimeUpdate);
      audioEle.addEventListener('ended', this.handleEnded);
      audioEle.addEventListener('loadedmetadata', this.handleLoaded);
      audioEle.addEventListener('loadstart', this.handleLoadStart);
    });

    //  update song url
    this.playerService.currentIndexSubj.subscribe(() => {
      if (this.audioService.audioEle && this.playerService.currentSong) {
        this.audioService.audioEle.src =
          this.playerService.currentSong?.song_url;
      }
    });
  }
}
