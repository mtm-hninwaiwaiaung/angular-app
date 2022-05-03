import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDay11Component } from './assignment-day11.component';

describe('AssignmentDay11Component', () => {
  let component: AssignmentDay11Component;
  let fixture: ComponentFixture<AssignmentDay11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentDay11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentDay11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
