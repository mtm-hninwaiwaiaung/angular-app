import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day26ParentComponent } from './day26-parent.component';

describe('Day26ParentComponent', () => {
  let component: Day26ParentComponent;
  let fixture: ComponentFixture<Day26ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day26ParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day26ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
