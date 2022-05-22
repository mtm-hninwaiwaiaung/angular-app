import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day26ChildComponent } from './day26-child.component';

describe('Day26ChildComponent', () => {
  let component: Day26ChildComponent;
  let fixture: ComponentFixture<Day26ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day26ChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day26ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
