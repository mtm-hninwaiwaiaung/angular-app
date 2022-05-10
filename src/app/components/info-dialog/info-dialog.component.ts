import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Booking, InputObj } from '../../interfaces/interface';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss']
})
export class InfoDialogComponent implements OnInit {

  roomTypeList: InputObj[] = [
    { id: 1, label: 'Single $100', value: 100 },
    { id: 2, label: 'Double $250', value: 250 },
    { id: 3, label: 'King $400', value: 400 },
    { id: 4, label: 'Luxury $500', value: 500 }
  ];
  data: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public bookingData: Booking,
    public dialogRef: MatDialogRef<InfoDialogComponent>
  ) { }

  ngOnInit(): void {
    this.bookingData.roomType = this.getLableByValue(this.bookingData.roomType);
    this.data = this.bookingData;
  }

  getLableByValue(inputVal: any) {
    const convertedVal = parseInt(inputVal.toString());
    const selectedVal: any = this.roomTypeList.find((eachType: InputObj) => eachType.value === convertedVal);
    return selectedVal.label;
  }
}
