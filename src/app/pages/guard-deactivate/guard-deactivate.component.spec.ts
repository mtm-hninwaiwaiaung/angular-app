import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardDeactivateComponent } from './guard-deactivate.component';

describe('GuardDeactivateComponent', () => {
  let component: GuardDeactivateComponent;
  let fixture: ComponentFixture<GuardDeactivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardDeactivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardDeactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
