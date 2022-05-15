import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardExampleComponent } from './guard-example.component';

describe('GuardExampleComponent', () => {
  let component: GuardExampleComponent;
  let fixture: ComponentFixture<GuardExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
