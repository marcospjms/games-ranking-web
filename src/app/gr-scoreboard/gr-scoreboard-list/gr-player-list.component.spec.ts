import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrScoreboardListComponent } from './gr-scoreboard-list.component';

describe('GrScoreboardListComponent', () => {
  let component: GrScoreboardListComponent;
  let fixture: ComponentFixture<GrScoreboardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrScoreboardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrScoreboardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
