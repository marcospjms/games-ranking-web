import { Player } from '../../gr-player/shared/player.model';

export class Scoreboard {
  id: number;
  name: string;
  scoreEntries: ScoreEntry[];
}

export class ScoreEntry {
  id: string;
  player: Player;
  victories: number;
  matches: number;
}
