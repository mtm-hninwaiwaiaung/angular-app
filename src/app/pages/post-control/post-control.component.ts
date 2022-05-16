import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-control',
  templateUrl: './post-control.component.html',
  styleUrls: ['./post-control.component.scss']
})
export class PostControlComponent implements OnInit {
  postForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]]
    });
  }

  get postControl() {
    return this.postForm.controls;
  }

  onSubmit() {
    console.log('data', this.postForm.value);
  }
}
