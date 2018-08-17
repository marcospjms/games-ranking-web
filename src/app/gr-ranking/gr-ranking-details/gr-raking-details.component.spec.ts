import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrRankingDetailsComponent } from './gr-raking-details.component';

describe('GrRankingDetailsComponent', () => {
  let component: GrRankingDetailsComponent;
  let fixture: ComponentFixture<GrRankingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrRankingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrRankingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
