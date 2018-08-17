import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrPlayerListComponent } from './gr-player-list.component';

describe('GrScoreboardListComponent', () => {
  let component: GrPlayerListComponent;
  let fixture: ComponentFixture<GrPlayerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrPlayerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrPlayerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
