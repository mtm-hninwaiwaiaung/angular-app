import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-assignment-day25',
  templateUrl: './assignment-day25.component.html',
  styleUrls: ['./assignment-day25.component.scss']
})
export class AssignmentDay25Component implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'author'];
  postList: any = [];

  constructor() { }

  ngOnInit(): void {
    this.getPostList();
  }

  getPostList() {
    const postListUrl = 'http://localhost:3000/posts';
    // getJSON similar with http get request. 
    const post$ = ajax.getJSON(postListUrl);
    post$.pipe(
    ).subscribe({
      next: res => {
        this.postList = res;
      },
      error: err => console.log(err)
    });
  }

}
