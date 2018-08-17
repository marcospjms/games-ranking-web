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
  selector: 'app-gr-scoreboard-details',
  templateUrl: './gr-raking-details.component.html',
  styleUrls: ['./gr-raking-details.component.scss']
})
export class GrRankingDetailsComponent implements OnInit {

  scoreboard: Ranking = new Ranking();
  loading = false;
  choosingPlayer = false;
  players: Player[] = [];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private scoreboardService: RankingService,
              private playerService: PlayerService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.loading = true;
      const id = params['id'];
      if (!id) {
        this.backToList();
      }
      this.scoreboardService.get(id).subscribe(scoreboard => {
        this.scoreboard = scoreboard;
        this.loading = false;
      }, error => {
        this.backToList();
      });

      this.playerService.listAll().subscribe(result => this.players = result);
    });
  }

  backToList() {
    this.router.navigateByUrl(this.router.createUrlTree(['.', 'scoreboards']));
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

  createScoreEntry(selectedPlayer: Player) {
    this.choosingPlayer = false;
    this.scoreboardService.createScoreEntry(this.scoreboard, selectedPlayer).subscribe(scoreboard => this.scoreboard = scoreboard);
  }

  public incrementVictories(scoreEntry: RankingEntry, i: number) {
    this.scoreboardService.incrementVictories(this.scoreboard, scoreEntry.player);
  }

  public decreaseVictories(scoreEntry: RankingEntry, i: number) {
    this.scoreboardService.decreaseVictories(this.scoreboard, scoreEntry.player);
  }

  public incrementMatches(scoreEntry: RankingEntry, i: number) {
    this.scoreboardService.incrementMatches(this.scoreboard, scoreEntry.player);
  }

  public decreaseMatches(scoreEntry: RankingEntry, i: number) {
    this.scoreboardService.decreaseMatches(this.scoreboard, scoreEntry.player);
  }

}
