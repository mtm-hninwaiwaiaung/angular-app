import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guard-deactivate',
  templateUrl: './guard-deactivate.component.html',
  styleUrls: ['./guard-deactivate.component.scss']
})
export class GuardDeactivateComponent implements OnInit {
  data = [];
  constructor() { }

  ngOnInit(): void {
  }

  canDeactivate() {
    return this.data.length > 0;
  }
}
