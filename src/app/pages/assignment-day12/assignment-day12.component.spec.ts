import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDay12Component } from './assignment-day12.component';

describe('AssignmentDay12Component', () => {
  let component: AssignmentDay12Component;
  let fixture: ComponentFixture<AssignmentDay12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentDay12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentDay12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
