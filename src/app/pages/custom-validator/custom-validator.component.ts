import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidateUrl } from '../../validators/url.validator';

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
    });
  }

  saveForm(form: FormGroup) {
    if (form.valid) {
      window.open(form.value.websiteUrl, '_blank');
    }
  }
}
