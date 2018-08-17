import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrRakingListComponent } from './gr-ranking-list.component';

describe('GrRakingListComponent', () => {
  let component: GrRakingListComponent;
  let fixture: ComponentFixture<GrRakingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrRakingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrRakingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
