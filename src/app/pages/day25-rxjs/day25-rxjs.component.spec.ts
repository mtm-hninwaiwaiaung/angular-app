import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day25RxjsComponent } from './day25-rxjs.component';

describe('Day25RxjsComponent', () => {
  let component: Day25RxjsComponent;
  let fixture: ComponentFixture<Day25RxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day25RxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day25RxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
