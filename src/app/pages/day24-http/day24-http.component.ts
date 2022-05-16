import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-day24-http',
  templateUrl: './day24-http.component.html',
  styleUrls: ['./day24-http.component.scss']
})
export class Day24HttpComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'author', 'action'];
  postList = [];
  constructor(
    private apiSvc: ApiService
  ) { }

  ngOnInit(): void {
    this.getPostData();
  }

  getPostData() {
    this.apiSvc.getAllPost().subscribe({
      next: data => {
        this.postList = data;
      },
      error: err => {
        console.log('=== handle error ====')
        console.log(err)
      }
    });
  }

  // old version example.
  getPostDataV2() {
    this.apiSvc.getAllPost()
      .subscribe((data) => {
        console.log('=== data ===')
        console.log(data)
      }, error => {
        console.log('=== handle http ====')
        console.log(error)
      });
  }

  deletePostData(id: number) {
    this.apiSvc.deletePost(id).subscribe({
      next: retData => {
        this.getPostData();
      },
      error: err => {
        console.log('=== handle error ====')
        console.log(err)
      }
    })
  }

}
