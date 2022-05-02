import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Position } from '../../interfaces/interface';

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.scss']
})
export class ReactiveFormExampleComponent implements OnInit {

  positionList: Position[] = [
    { id: '1', value: 'Developer' },
    { id: '2', value: 'Senior Programmer' },
    { id: '3', value: 'Software Architect' }
  ];

  public userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    position: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required)
  });
  isSubmitted = false;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  submitForm() {
    this.isSubmitted = true;
    if (this.userForm.valid) {
      this.snackBar.open(JSON.stringify(this.userForm.value), '', { duration: 3000 });
    } else {
      this.snackBar.open('Please fill all fields', '', { duration: 2000 });
    }
  }
}
