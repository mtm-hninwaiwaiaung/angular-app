import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day23ResolverComponent } from './day23-resolver.component';

describe('Day23ResolverComponent', () => {
  let component: Day23ResolverComponent;
  let fixture: ComponentFixture<Day23ResolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day23ResolverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day23ResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
