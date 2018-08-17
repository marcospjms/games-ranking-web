import { GrRankingModule } from './gr-ranking.module';

describe('GrRankingModule', () => {
  let grRankingModule: GrRankingModule;

  beforeEach(() => {
    grRankingModule = new GrRankingModule();
  });

  it('should create an instance', () => {
    expect(grRankingModule).toBeTruthy();
  });
});
