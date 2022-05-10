import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDay14Component } from './assignment-day14.component';

describe('AssignmentDay14Component', () => {
  let component: AssignmentDay14Component;
  let fixture: ComponentFixture<AssignmentDay14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentDay14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentDay14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
