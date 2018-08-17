import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrScoreboardComponent } from './gr-scoreboard.component';

describe('GrScoreboardComponent', () => {
  let component: GrScoreboardComponent;
  let fixture: ComponentFixture<GrScoreboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrScoreboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrScoreboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
