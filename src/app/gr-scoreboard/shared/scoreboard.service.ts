import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Scoreboard } from './scoreboard.model';
import { Observable } from 'rxjs/index';
import {Player} from '../../gr-player/shared/player.model';

@Injectable({
  providedIn: 'root'
})
export class ScoreboardService {

  scoreboardUrl: string;

  constructor(private httpClient: HttpClient) {
    this.scoreboardUrl = environment.apiUrl + 'scoreboards';
  }

  public save(scoreboard: Scoreboard): Observable<Scoreboard> {
    return this.httpClient.post<Scoreboard>(this.scoreboardUrl, scoreboard);
  }

  public update(scoreboard: Scoreboard): Observable<Scoreboard> {
    return this.httpClient.put<Scoreboard>(this.scoreboardUrl, scoreboard);
  }

  public delete(scoreboard: Scoreboard): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${this.scoreboardUrl}/${scoreboard.id}`);
  }

  public listAll(): Observable<Scoreboard[]> {
    return this.httpClient.get<Scoreboard[]>(this.scoreboardUrl);
  }

  public get(id: number): Observable<Scoreboard> {
    return this.httpClient.get<Scoreboard>(`${this.scoreboardUrl}/${id}`);
  }

  public createScoreEentry(scoreboard: Scoreboard, player: Player): Observable<Scoreboard> {
    return this.httpClient.put<Scoreboard>(`${this.scoreboardUrl}/${scoreboard.id}/createScoreEntry/${player.id}`, scoreboard);
  }
}
