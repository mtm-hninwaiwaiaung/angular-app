import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day20RouteComponent } from './day20-route.component';

describe('Day20RouteComponent', () => {
  let component: Day20RouteComponent;
  let fixture: ComponentFixture<Day20RouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day20RouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day20RouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
