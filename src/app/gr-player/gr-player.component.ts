import { Component, OnInit } from '@angular/core';
import { Player } from './shared/player.model';
import { PlayerService } from './shared/player.service';

@Component({
  selector: 'app-gr-player',
  templateUrl: './gr-player.component.html',
  styleUrls: ['./gr-player.component.scss']
})
export class GrPlayerComponent implements OnInit {

  players: Player[];
  loading = false;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.loading = true
    console.log(this.playerService)
    this.playerService.listAll().subscribe(result => {
      this.players = result;
      this.loading = false;
    });
  }

  add() {
    this.players.push(new Player());
  }

  changed(player: Player) {
    if (player.name !== undefined && player.name.trim() !== '') {
      if (!player.id) {
        this.playerService.save(player).subscribe(newPlayer => player.id = newPlayer.id);
      } else {
        this.playerService.update(player).subscribe();
      }

    }
  }

}
