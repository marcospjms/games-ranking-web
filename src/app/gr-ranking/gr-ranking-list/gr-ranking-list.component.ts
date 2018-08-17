import { Component, OnInit } from '@angular/core';
import { Ranking } from '../shared/ranking.model';
import { RankingService } from '../shared/ranking.service';


@Component({
  selector: 'app-gr-raking-list',
  templateUrl: './gr-ranking-list.component.html',
  styleUrls: ['./gr-ranking-list.component.scss']
})
export class GrRakingListComponent implements OnInit {

  rankings: Ranking[];
  loading = false;

  constructor(private rankingService: RankingService) { }

  ngOnInit() {
    this.loading = true;
    this.rankingService.listAll().subscribe(result => {
      this.rankings = result;
      this.loading = false;
    });
  }

  add() {
    this.rankings.push(new Ranking());
  }

  changed(ranking: Ranking) {
    if (ranking.name !== undefined && ranking.name.trim() !== '') {
      if (!ranking.id) {
        this.rankingService.save(ranking).subscribe(newPlayer => ranking.id = newPlayer.id);
      } else {
        this.rankingService.update(ranking).subscribe();
      }

    }
  }

  delete(ranking: Ranking, index: number) {
    if (!confirm('Tem certeza que deseja deletar?')) {
      return;
    }
    this.rankingService.delete(ranking).subscribe(result => {
      this.rankings.splice(index, 1);
    });
  }

}
