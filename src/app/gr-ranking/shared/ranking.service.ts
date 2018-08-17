import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Ranking } from './ranking.model';
import { Observable } from 'rxjs/index';
import {Player} from '../../gr-player/shared/player.model';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  rankingsUrl: string;

  constructor(private httpClient: HttpClient) {
    this.rankingsUrl = environment.apiUrl + 'rankings';
  }

  public save(scoreboard: Ranking): Observable<Ranking> {
    return this.httpClient.post<Ranking>(this.rankingsUrl, scoreboard);
  }

  public update(scoreboard: Ranking): Observable<Ranking> {
    return this.httpClient.put<Ranking>(this.rankingsUrl, scoreboard);
  }

  public delete(scoreboard: Ranking): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${this.rankingsUrl}/${scoreboard.id}`);
  }

  public listAll(): Observable<Ranking[]> {
    return this.httpClient.get<Ranking[]>(this.rankingsUrl);
  }

  public get(id: number): Observable<Ranking> {
    return this.httpClient.get<Ranking>(`${this.rankingsUrl}/${id}`);
  }

  public createScoreEntry(scoreboard: Ranking, player: Player): Observable<Ranking> {
    return this.httpClient.put<Ranking>(`${this.rankingsUrl}/${scoreboard.id}/createRankingEntry/${player.id}`, scoreboard);
  }

  public incrementVictories(scoreboard: Ranking, player: Player): Observable<Ranking> {
    return this.httpClient.put<Ranking>(`${this.rankingsUrl}/${scoreboard.id}/incrementVictories/${player.id}`, scoreboard);
  }

  public decreaseVictories(scoreboard: Ranking, player: Player): Observable<Ranking> {
    return this.httpClient.put<Ranking>(`${this.rankingsUrl}/${scoreboard.id}/decreaseVictories/${player.id}`, scoreboard);
  }

  public incrementMatches(scoreboard: Ranking, player: Player): Observable<Ranking> {
    return this.httpClient.put<Ranking>(`${this.rankingsUrl}/${scoreboard.id}/incrementMatches/${player.id}`, scoreboard);
  }

  public decreaseMatches(scoreboard: Ranking, player: Player): Observable<Ranking> {
    return this.httpClient.put<Ranking>(`${this.rankingsUrl}/${scoreboard.id}/createScoreEntry/${player.id}`, scoreboard);
  }
}
