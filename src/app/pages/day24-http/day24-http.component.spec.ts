import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day24HttpComponent } from './day24-http.component';

describe('Day24HttpComponent', () => {
  let component: Day24HttpComponent;
  let fixture: ComponentFixture<Day24HttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day24HttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day24HttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
