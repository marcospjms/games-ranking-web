import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrPlayerComponent } from './gr-player.component';

describe('GrPlayerComponent', () => {
  let component: GrPlayerComponent;
  let fixture: ComponentFixture<GrPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
