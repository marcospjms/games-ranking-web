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

  public save(ranking: Ranking): Observable<Ranking> {
    return this.httpClient.post<Ranking>(this.rankingsUrl, ranking);
  }

  public update(ranking: Ranking): Observable<Ranking> {
    return this.httpClient.put<Ranking>(this.rankingsUrl, ranking);
  }

  public delete(ranking: Ranking): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${this.rankingsUrl}/${ranking.id}`);
  }

  public listAll(): Observable<Ranking[]> {
    return this.httpClient.get<Ranking[]>(this.rankingsUrl);
  }

  public get(id: number): Observable<Ranking> {
    return this.httpClient.get<Ranking>(`${this.rankingsUrl}/${id}`);
  }

  public createRankingEntry(ranking: Ranking, player: Player): Observable<Ranking> {
    return this.httpClient.put<Ranking>(`${this.rankingsUrl}/${ranking.id}/createRankingEntry/${player.id}`, ranking);
  }

  public deleteRankingEntry(ranking: Ranking, player: Player): Observable<Ranking> {
    return this.httpClient.put<Ranking>(`${this.rankingsUrl}/${ranking.id}/deleteRankingEntry/${player.id}`, ranking);
  }

  public incrementVictories(ranking: Ranking, player: Player): Observable<Ranking> {
    return this.httpClient.put<Ranking>(`${this.rankingsUrl}/${ranking.id}/incrementVictories/${player.id}`, ranking);
  }

  public decreaseVictories(ranking: Ranking, player: Player): Observable<Ranking> {
    return this.httpClient.put<Ranking>(`${this.rankingsUrl}/${ranking.id}/decreaseVictories/${player.id}`, ranking);
  }

  public incrementMatches(ranking: Ranking, player: Player): Observable<Ranking> {
    return this.httpClient.put<Ranking>(`${this.rankingsUrl}/${ranking.id}/incrementMatches/${player.id}`, ranking);
  }

  public decreaseMatches(ranking: Ranking, player: Player): Observable<Ranking> {
    return this.httpClient.put<Ranking>(`${this.rankingsUrl}/${ranking.id}/decreaseMatches/${player.id}`, ranking);
  }
}
