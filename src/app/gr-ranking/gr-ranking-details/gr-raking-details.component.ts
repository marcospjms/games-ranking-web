import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import { Ranking, RankingEntry } from '../shared/ranking.model';
import { RankingService } from '../shared/ranking.service';
import {Player} from '../../gr-player/shared/player.model';
import {PlayerService} from '../../gr-player/shared/player.service';

@Component({
  selector: 'app-gr-ranking-details',
  templateUrl: './gr-raking-details.component.html',
  styleUrls: ['./gr-raking-details.component.scss']
})
export class GrRankingDetailsComponent implements OnInit {

  ranking: Ranking = new Ranking();
  loading = false;
  choosingPlayer = false;
  players: Player[] = [];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private rankingService: RankingService,
              private playerService: PlayerService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.loading = true;
      const id = params['id'];
      if (!id) {
        this.backToList();
      }
      this.rankingService.get(id).subscribe(ranking => {
        this.ranking = ranking;
        this.loading = false;
        this.sortEntries();
      }, error => {
        this.backToList();
      });

      this.playerService.listAll().subscribe(result => this.players = result);
    });
  }

  backToList() {
    this.router.navigateByUrl(this.router.createUrlTree(['.', 'rankings']));
  }

  changed(ranking: Ranking) {
    if (ranking.name !== undefined && ranking.name.trim() !== '') {
      if (!ranking.id) {
        this.rankingService.save(ranking).subscribe(newPlayer => ranking.id = newPlayer.id, error => {
          alert('Erro ao tentar realizar essa operação');
        });
      } else {
        this.rankingService.update(ranking).subscribe(() => {}, error => {
          alert('Erro ao tentar realizar essa operação');
        });
      }

    }
  }

  createRankingEntry(selectedPlayer: Player) {
    this.choosingPlayer = false;
    this.rankingService.createRankingEntry(this.ranking, selectedPlayer).subscribe(ranking => {
        this.ranking = ranking;
        this.sortEntries();
      },
        error => {
      alert('Erro ao tentar realizar essa operação');
    });
  }

  deleteRankingEntry(rankingEntry: RankingEntry, i: number) {
    this.rankingService.deleteRankingEntry(this.ranking, rankingEntry.player).subscribe(ranking => {
        this.ranking = ranking;
        this.sortEntries();
      },
      error => {
        alert('Erro ao tentar realizar essa operação');
      });
  }

  public incrementVictories(rankingEntry: RankingEntry, i: number) {
    this.rankingService.incrementVictories(this.ranking, rankingEntry.player).subscribe(ranking => {
        this.ranking = ranking;
        this.sortEntries();
      },
      error => {
        alert('Erro ao tentar realizar essa operação');
      });
  }

  public decreaseVictories(rankingEntry: RankingEntry, i: number) {
    if (rankingEntry.victories === 0) {
      return;
    }
    this.rankingService.decreaseVictories(this.ranking, rankingEntry.player).subscribe(ranking => {
      this.ranking = ranking;
      this.sortEntries();
      },
      error => {
        alert('Erro ao tentar realizar essa operação');
      });
  }

  public incrementMatches(rankingEntry: RankingEntry, i: number) {
    this.rankingService.incrementMatches(this.ranking, rankingEntry.player).subscribe(ranking => {
        this.ranking = ranking;
        this.sortEntries();
      },
        error => {
          alert('Erro ao tentar realizar essa operação');
        });
  }

  public decreaseMatches(rankingEntry: RankingEntry, i: number) {
    if (rankingEntry.matches === 0) {
      return;
    }
    this.rankingService.decreaseMatches(this.ranking, rankingEntry.player).subscribe(ranking => {
        this.ranking = ranking;
        this.sortEntries();
      }
      , error => {
          alert('Erro ao tentar realizar essa operação');
        });
  }

  sortEntries() {
    this.ranking.rankingEntries.sort((e1: RankingEntry, e2: RankingEntry) => {
      return e2.victories - e1.victories;
    });
  }

}
