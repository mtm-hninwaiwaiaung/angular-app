import { Component, Input, OnInit, Output } from '@angular/core';

import { PeriodicElement } from '../../interfaces/interface';

@Component({
  selector: 'app-day26-child',
  templateUrl: './day26-child.component.html',
  styleUrls: ['./day26-child.component.scss']
})
export class Day26ChildComponent implements OnInit {
  @Input() elementListFromParent!: PeriodicElement[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor() { }

  ngOnInit(): void {
  }

}
