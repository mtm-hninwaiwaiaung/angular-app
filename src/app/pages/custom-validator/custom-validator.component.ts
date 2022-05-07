import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { ValidateUrl } from '../../validators/url.validator';

import { URL } from '../../interfaces/interface';


interface URLFormGroup extends FormGroup {
  value: URL;
  //add these manually again, same fields as URL
  controls: {
    websiteName: AbstractControl;
    websiteUrl: AbstractControl;
  };
}

@Component({
  selector: 'app-custom-validator',
  templateUrl: './custom-validator.component.html',
  styleUrls: ['./custom-validator.component.scss']
})
export class CustomValidatorComponent implements OnInit {
  myForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      websiteName: [''],
      websiteUrl: ['', [Validators.required, ValidateUrl]]
    }) as URLFormGroup;
  }

  saveForm(form: FormGroup) {
    if (form.valid) {
      window.open(form.value.websiteUrl, '_blank');
    }
  }
}
