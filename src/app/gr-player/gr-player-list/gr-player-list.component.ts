import { Component, OnInit } from '@angular/core';
import { Player } from '../shared/player.model';
import { PlayerService } from '../shared/player.service';

@Component({
  selector: 'app-gr-player',
  templateUrl: './gr-player-list.component.html',
  styleUrls: ['./gr-player-list.component.scss']
})
export class GrPlayerListComponent implements OnInit {

  players: Player[];
  loading = false;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.loading = true;
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
        this.playerService.save(player).subscribe(newPlayer => player.id = newPlayer.id, error => {
          alert('Erro ao tentar realizar essa operação');
        });
      } else {
        this.playerService.update(player).subscribe(() => {}, error => {
          alert('Erro ao tentar realizar essa operação');
        });
      }

    }
  }

  delete(player: Player, index: number) {
    if (!confirm('Tem certeza que deseja deletar?')) {
      return;
    }
    this.playerService.delete(player).subscribe(result => {
      this.players.splice(index, 1);
    }, error => {
      alert('Erro ao tentar realizar essa operação');
    });
  }

}
