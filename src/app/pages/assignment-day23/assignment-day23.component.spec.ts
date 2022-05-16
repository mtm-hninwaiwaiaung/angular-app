import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDay23Component } from './assignment-day23.component';

describe('AssignmentDay23Component', () => {
  let component: AssignmentDay23Component;
  let fixture: ComponentFixture<AssignmentDay23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentDay23Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentDay23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
