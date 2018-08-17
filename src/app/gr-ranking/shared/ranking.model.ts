import { Player } from '../../gr-player/shared/player.model';

export class Ranking {
  id: number;
  name: string;
  rankingEntries: RankingEntry[];
}

export class RankingEntry {
  id: string;
  player: Player;
  victories: number;
  matches: number;
}
