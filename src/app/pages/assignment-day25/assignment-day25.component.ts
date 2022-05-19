import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
} from 'rxjs/operators';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-assignment-day25',
  templateUrl: './assignment-day25.component.html',
  styleUrls: ['./assignment-day25.component.scss']
})
export class AssignmentDay25Component implements OnInit {
  searchText = new FormControl('');
  displayedColumns: string[] = ['id', 'title', 'author'];
  postList: any = [];
  orgList: any = [];

  constructor(
    private apiSvc: ApiService
  ) { }

  ngOnInit(): void {
    this.getPostList();
    this.handleSearch();
  }

  getPostList() {
    this.apiSvc.getAllPostUsingRxjs()
      .subscribe((data) => {
        this.orgList = data;
        this.postList = data;
      }, error => {
        console.log(error);
      });
  }

  handleSearch() {
    this.searchText.valueChanges
      .pipe(
        // wait 1000 ms (1s).
        debounceTime(1000),
        distinctUntilChanged()
      ).subscribe((currentText) => {
        if (currentText) {
          this.postList = this.orgList
            .filter((eachPost: any) => {
              return eachPost.title.toLowerCase().indexOf(currentText.toLowerCase()) >= 0;
            });
        } else {
          this.postList = this.orgList;
        }
      });
  }

}
