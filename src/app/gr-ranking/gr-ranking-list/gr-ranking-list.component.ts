import { Component, OnInit } from '@angular/core';
import { Ranking } from '../shared/ranking.model';
import { RankingService } from '../shared/ranking.service';


@Component({
  selector: 'app-gr-raking-list',
  templateUrl: './gr-ranking-list.component.html',
  styleUrls: ['./gr-ranking-list.component.scss']
})
export class GrRakingListComponent implements OnInit {

  scoreboards: Ranking[];
  loading = false;

  constructor(private scoreboardService: RankingService) { }

  ngOnInit() {
    this.loading = true;
    this.scoreboardService.listAll().subscribe(result => {
      this.scoreboards = result;
      this.loading = false;
    });
  }

  add() {
    this.scoreboards.push(new Ranking());
  }

  changed(scoreb: Ranking) {
    if (scoreb.name !== undefined && scoreb.name.trim() !== '') {
      if (!scoreb.id) {
        this.scoreboardService.save(scoreb).subscribe(newPlayer => scoreb.id = newPlayer.id);
      } else {
        this.scoreboardService.update(scoreb).subscribe();
      }

    }
  }

  delete(scoreboard: Ranking, index: number) {
    if (!confirm('Tem certeza que deseja deletar?')) {
      return;
    }
    this.scoreboardService.delete(scoreboard).subscribe(result => {
      this.scoreboards.splice(index, 1);
    });
  }

}
