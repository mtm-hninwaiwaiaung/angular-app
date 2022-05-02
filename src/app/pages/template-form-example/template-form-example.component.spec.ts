import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormExampleComponent } from './template-form-example.component';

describe('TemplateFormExampleComponent', () => {
  let component: TemplateFormExampleComponent;
  let fixture: ComponentFixture<TemplateFormExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateFormExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
