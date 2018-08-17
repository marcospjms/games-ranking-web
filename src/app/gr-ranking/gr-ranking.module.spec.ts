import { GrRankingModule } from './gr-ranking.module';

describe('GrRankingModule', () => {
  let grScoreboardModule: GrRankingModule;

  beforeEach(() => {
    grScoreboardModule = new GrRankingModule();
  });

  it('should create an instance', () => {
    expect(grScoreboardModule).toBeTruthy();
  });
});
