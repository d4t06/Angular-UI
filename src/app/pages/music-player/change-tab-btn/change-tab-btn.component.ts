import { Component, inject } from '@angular/core';
import { PlayerService } from '../player.service';
import { ButtonComponent } from '../../../components/button/button.component';

@Component({
  selector: 'app-change-tab-btn',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './change-tab-btn.component.html',
  styles: ``,
})
export class ChangeTabBtnComponent {
  playerService = inject(PlayerService);

  toggle() {
    this.playerService.tab === 'playing'
      ? this.playerService.setTab('queue')
      : this.playerService.setTab('playing');
  }
}
