import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDay20Component } from './assignment-day20.component';

describe('AssignmentDay20Component', () => {
  let component: AssignmentDay20Component;
  let fixture: ComponentFixture<AssignmentDay20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentDay20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentDay20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
