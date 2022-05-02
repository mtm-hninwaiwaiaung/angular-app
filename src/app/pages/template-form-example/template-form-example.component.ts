import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Position } from '../../interfaces/interface';

@Component({
  selector: 'app-template-form-example',
  templateUrl: './template-form-example.component.html',
  styleUrls: ['./template-form-example.component.scss']
})
export class TemplateFormExampleComponent implements OnInit {

  @ViewChild('myForm') public userForm!: NgForm;
  positionList: Position[] = [
    { id: '1', value: 'Developer' },
    { id: '2', value: 'Senior Programmer' },
    { id: '3', value: 'Software Architect' }
  ];
  formData = {
    name: '',
    position: '',
    gender: ''
  };

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.userForm.valid) {
      this.snackBar.open(JSON.stringify(this.formData), '', { duration: 3000 });
    } else {
      this.snackBar.open('Please fill all fields', '', { duration: 2000 });
    }
  }
}
