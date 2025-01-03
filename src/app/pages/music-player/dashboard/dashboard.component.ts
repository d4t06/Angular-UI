import { Component, ElementRef, ViewChild, inject } from "@angular/core";
import { ButtonComponent } from "../../../components/button/button.component";
import { PlayerService } from "../player.service";
import { CommonModule, NgClass, NgSwitch } from "@angular/common";
import { AudioService } from "../audio.service";
import { formatTime } from "../../../../share/utils/appHelper";
import { SongListComponent } from "../song-list/song-list.component";
import { ChangeTabBtnComponent } from "../change-tab-btn/change-tab-btn.component";
import { PlayingService } from "../playing.service";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [
    ButtonComponent,
    NgClass,
    NgSwitch,
    CommonModule,
    SongListComponent,
    ChangeTabBtnComponent,
  ],
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent {
  playerService = inject(PlayerService);
  audioService = inject(AudioService);
  playingService = inject(PlayingService);

  @ViewChild("timeLineRef", { read: ElementRef })
  timeLineRef: ElementRef<HTMLDivElement>;

  @ViewChild("timeLineHolderRef", { read: ElementRef })
  timeLineHolderRef: ElementRef<HTMLDivElement>;

  @ViewChild("currentTimeRef", { read: ElementRef })
  currentTimeRef: ElementRef<HTMLDivElement>;

  formatTime = formatTime;

  _handlePlayPause = () => {
    if (this.playerService.currentIndex === null)
      this.playerService.setCurrentSong(
        Math.round(Math.random() * this.playerService.songs.length - 1),
      );
    else this.playingService.handlePlayPause();
  };

  handleShowHide = (active: boolean) => {
    if (active) return "opacity-100 h-auto";
    else return "opacity-0 pointer-events-none h-0";
  };

  classes = {
    timeLineRef: `relative group h-full sm:h-1 hover:h-full  w-full rounded-full bg-[#fff]/30 before:content-[''] before:w-[100%] before:h-[16px] before:absolute before:top-[50%] before:translate-y-[-50%]`,
    timeLineHolderRef:
      "absolute pointer-events-none h-6 w-3 rounded-sm bg-amber-900 border-[2px] border-amber-200 top-1/2 -translate-y-1/2 -translate-x-1/2",
    toggleButton: "queue-btn p-2 ",
  };

  ngAfterViewInit() {
    this.playingService.timeLineEle = this.timeLineRef?.nativeElement;
    this.playingService.timeLineHolderEle =
      this.timeLineHolderRef?.nativeElement;
    this.playingService.currentTimeTextEle = this.currentTimeRef?.nativeElement;
  }
}
