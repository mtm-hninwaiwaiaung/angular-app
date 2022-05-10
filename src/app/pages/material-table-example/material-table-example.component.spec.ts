import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTableExampleComponent } from './material-table-example.component';

describe('MaterialTableExampleComponent', () => {
  let component: MaterialTableExampleComponent;
  let fixture: ComponentFixture<MaterialTableExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialTableExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
