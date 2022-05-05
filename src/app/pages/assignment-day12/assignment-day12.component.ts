import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assignment-day12',
  templateUrl: './assignment-day12.component.html',
  styleUrls: ['./assignment-day12.component.scss']
})
export class AssignmentDay12Component implements OnInit {
  registrationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  get regForm() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registrationForm.value));
  }

  checkConfirmPassword() {
    const matchingControl = this.registrationForm.controls['confirmPassword'];
    if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
      // return if another validator has already found an error on the matchingControl.
      return;
    }
    if ((this.registrationForm.value.password !== this.registrationForm.value.confirmPassword) &&
      this.registrationForm.value.password !== '' && this.registrationForm.value.confirmPassword !== '') {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}