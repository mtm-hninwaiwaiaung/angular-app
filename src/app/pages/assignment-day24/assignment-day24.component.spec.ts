import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDay24Component } from './assignment-day24.component';

describe('AssignmentDay24Component', () => {
  let component: AssignmentDay24Component;
  let fixture: ComponentFixture<AssignmentDay24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentDay24Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentDay24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
