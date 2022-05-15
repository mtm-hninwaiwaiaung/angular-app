import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardLazyComponent } from './guard-lazy.component';

describe('GuardLazyComponent', () => {
  let component: GuardLazyComponent;
  let fixture: ComponentFixture<GuardLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
