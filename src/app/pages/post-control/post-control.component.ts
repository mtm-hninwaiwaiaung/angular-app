import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { reduce } from 'rxjs';

import { Post } from '../../interfaces/interface';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-post-control',
  templateUrl: './post-control.component.html',
  styleUrls: ['./post-control.component.scss']
})
export class PostControlComponent implements OnInit {
  postForm!: FormGroup;
  existingPost!: Post;
  isEditPost: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apiSvc: ApiService
  ) { }

  ngOnInit(): void {
    this.existingPost = this.route.snapshot.data['post'];
    this.postForm = this.formBuilder.group({
      id: [0],
      title: ['', [Validators.required]],
      author: ['', [Validators.required]]
    });

    if (this.existingPost) {
      this.isEditPost = true;
      this.postForm.patchValue({
        id: this.existingPost.id,
        title: this.existingPost.title,
        author: this.existingPost.author
      });
    }
  }

  get postControl() {
    return this.postForm.controls;
  }

  onSubmit() {
    console.log('data', this.postForm.value);
    console.log('edit', this.isEditPost)
    if (this.isEditPost) {
      this.apiSvc.editPost(this.postForm.value).subscribe({
        next: retData => {
          this.router.navigateByUrl('/day24');
        },
        error: err => {
          console.log('=== error handling ===')
          console.log(err)
        }
      });
    } else {
      const parmaData: Post = {
        title: this.postForm.value.title,
        author: this.postForm.value.author
      }
      this.apiSvc.createPost(parmaData).subscribe({
        next: retData => {
          this.router.navigateByUrl('/day24');
        },
        error: err => {
          console.log('=== error handling ===')
          console.log(err)
        }
      });
    }

  }
}
