import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assignment-day22',
  templateUrl: './assignment-day22.component.html',
  styleUrls: ['./assignment-day22.component.scss']
})
export class AssignmentDay22Component implements OnInit {
  paramId: String = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.paramId = this.getCurrentUserId();
  }

  getCurrentUserId(): String {
    let retStr = '';
    this.route.params.subscribe(params => {
      retStr = params['id'];
    });
    return retStr;
  }

}
