import { Component, OnInit } from '@angular/core';
import { Scoreboard } from '../shared/scoreboard.model';
import { ScoreboardService } from '../shared/scoreboard.service';


@Component({
  selector: 'app-gr-scoreboard-list',
  templateUrl: './gr-player-list.component.html',
  styleUrls: ['./gr-player-list.component.scss']
})
export class GrScoreboardListComponent implements OnInit {

  scoreboards: Scoreboard[];
  loading = false;

  constructor(private scoreboardService: ScoreboardService) { }

  ngOnInit() {
    this.loading = true;
    this.scoreboardService.listAll().subscribe(result => {
      this.scoreboards = result;
      this.loading = false;
    });
  }

  add() {
    this.scoreboards.push(new Scoreboard());
  }

  changed(scoreb: Scoreboard) {
    if (scoreb.name !== undefined && scoreb.name.trim() !== '') {
      if (!scoreb.id) {
        this.scoreboardService.save(scoreb).subscribe(newPlayer => scoreb.id = newPlayer.id);
      } else {
        this.scoreboardService.update(scoreb).subscribe();
      }

    }
  }

  delete(scoreboard: Scoreboard, index: number) {
    if (!confirm('Tem certeza que deseja deletar?')) {
      return;
    }
    this.scoreboardService.delete(scoreboard).subscribe(result => {
      this.scoreboards.splice(index, 1);
    });
  }

}
