import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDay22Component } from './assignment-day22.component';

describe('AssignmentDay22Component', () => {
  let component: AssignmentDay22Component;
  let fixture: ComponentFixture<AssignmentDay22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentDay22Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentDay22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
