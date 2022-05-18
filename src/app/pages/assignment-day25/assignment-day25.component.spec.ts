import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDay25Component } from './assignment-day25.component';

describe('AssignmentDay25Component', () => {
  let component: AssignmentDay25Component;
  let fixture: ComponentFixture<AssignmentDay25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentDay25Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentDay25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
