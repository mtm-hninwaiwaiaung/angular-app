import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Member } from '../../interfaces/interface';

@Component({
  selector: 'app-assignment-day11',
  templateUrl: './assignment-day11.component.html',
  styleUrls: ['./assignment-day11.component.scss']
})
export class AssignmentDay11Component implements OnInit {

  @ViewChild('membershipForm') memberForm!: NgForm;
  member: Member = {
    name: '',
    email: '',
    membershipDate: new Date()
  };
  allMemberList: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.memberForm.valid) {
      this.allMemberList.push(this.memberForm.value);
      this.memberForm.resetForm();
      this.member.membershipDate = new Date();
    }
  }

  deleteCurrentUser(index: number) {
    if (index > -1) {
      this.allMemberList.splice(index, 1); // 2nd parameter means remove one item only
    }
  }
}
