import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day17RouteComponent } from './day17-route.component';

describe('Day17RouteComponent', () => {
  let component: Day17RouteComponent;
  let fixture: ComponentFixture<Day17RouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day17RouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day17RouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
