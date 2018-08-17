import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import { Scoreboard } from '../shared/scoreboard.model';
import { ScoreboardService } from '../shared/scoreboard.service';
import {Player} from '../../gr-player/shared/player.model';
import {PlayerService} from '../../gr-player/shared/player.service';

@Component({
  selector: 'app-gr-scoreboard-details',
  templateUrl: './gr-scoreboard-details.component.html',
  styleUrls: ['./gr-scoreboard-details.component.scss']
})
export class GrScoreboardDetailsComponent implements OnInit {

  scoreboard: Scoreboard = new Scoreboard();
  loading = false;
  choosingPlayer = false;
  players: Player[] = [];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private scoreboardService: ScoreboardService,
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

  changed(scoreb: Scoreboard) {
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
    this.scoreboardService.createScoreEentry(this.scoreboard, selectedPlayer).subscribe(scoreboard => this.scoreboard = scoreboard);
  }

}
