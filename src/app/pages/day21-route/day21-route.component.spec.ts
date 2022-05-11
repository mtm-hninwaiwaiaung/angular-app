import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day21RouteComponent } from './day21-route.component';

describe('Day21RouteComponent', () => {
  let component: Day21RouteComponent;
  let fixture: ComponentFixture<Day21RouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day21RouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day21RouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
