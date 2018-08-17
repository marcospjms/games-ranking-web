import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrScoreboardDetailsComponent } from './gr-scoreboard-details.component';

describe('GrScoreboardDetailsComponent', () => {
  let component: GrScoreboardDetailsComponent;
  let fixture: ComponentFixture<GrScoreboardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrScoreboardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrScoreboardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
