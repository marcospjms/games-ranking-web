import { GrScoreboardModule } from './gr-scoreboard.module';

describe('GrScoreboardModule', () => {
  let grScoreboardModule: GrScoreboardModule;

  beforeEach(() => {
    grScoreboardModule = new GrScoreboardModule();
  });

  it('should create an instance', () => {
    expect(grScoreboardModule).toBeTruthy();
  });
});
