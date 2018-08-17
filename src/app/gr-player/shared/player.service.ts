import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Player } from './player.model';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerUrl: string;

  constructor(private httpClient: HttpClient) {
    this.playerUrl = environment.apiUrl + 'players';
  }

  public save(player: Player): Observable<Player> {
    return this.httpClient.post<Player>(this.playerUrl, player);
  }

  public update(player: Player): Observable<Player> {
    return this.httpClient.put<Player>(this.playerUrl, player);
  }

  public listAll(): Observable<Player[]> {
    return this.httpClient.get<Player[]>(this.playerUrl);
  }


}
