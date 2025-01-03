import { NgClass } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { formatTime } from "../../../../share/utils/appHelper";

@Component({
  selector: "app-song-list-item",
  standalone: true,
  imports: [NgClass],
  templateUrl: "./song-list-item.component.html",
  styles: ``,
})
export class SongListItemComponent {
  @Input() song: Song;
  @Input() index: number;
  @Input() active: boolean;

  @Output() setCurrentSong = new EventEmitter();

  getActiveClass = () => {
    if (this.active) return "bg-amber-100 text-amber-800 active-song-item";
    return "cursor-pointer text-amber-100 hover:bg-amber-700";
  };

  formatTime = formatTime;

  classes = {
    container:
      "flex w-full font-medium justify-between items-center rounded-md p-2",
  };
}
