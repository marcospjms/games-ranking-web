import { GrPlayerModule } from './gr-player.module';

describe('GrPlayerModule', () => {
  let grPlayerModule: GrPlayerModule;

  beforeEach(() => {
    grPlayerModule = new GrPlayerModule();
  });

  it('should create an instance', () => {
    expect(grPlayerModule).toBeTruthy();
  });
});
