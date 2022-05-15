import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardChildExampleComponent } from './guard-child-example.component';

describe('GuardChildExampleComponent', () => {
  let component: GuardChildExampleComponent;
  let fixture: ComponentFixture<GuardChildExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardChildExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardChildExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
