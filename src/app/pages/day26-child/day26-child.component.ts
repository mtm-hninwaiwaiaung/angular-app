import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { PeriodicElement } from '../../interfaces/interface';

@Component({
  selector: 'app-day26-child',
  templateUrl: './day26-child.component.html',
  styleUrls: ['./day26-child.component.scss']
})
export class Day26ChildComponent implements OnInit {
  @Input() elementListFromParent!: PeriodicElement[];
  @Output() outputFromChild: EventEmitter<PeriodicElement> = new EventEmitter();

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];

  constructor() { }

  ngOnInit(): void {
  }

  sendDataToParent(parmaData: PeriodicElement) {
    this.outputFromChild.emit(parmaData);
  }

}
