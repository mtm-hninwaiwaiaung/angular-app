import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Booking, InputObj } from '../../interfaces/interface';

import { ValidateTelephone } from '../../validators/telephone.validator';

import { InfoDialogComponent } from '../../components/info-dialog/info-dialog.component';

interface BookingFormGroup extends FormGroup {
  value: Booking;
  //add these manually again, same fields as URL
  controls: {
    name: AbstractControl,
    address: AbstractControl,
    email: AbstractControl,
    telephone: AbstractControl,
    checkInDate: AbstractControl,
    checkOutDate: AbstractControl,
    numberOfGuest: AbstractControl,
    roomType: AbstractControl,
    wifiOption: AbstractControl,
    totalCost: AbstractControl
    specialRequirements: AbstractControl
  };
}

@Component({
  selector: 'app-assignment-day14',
  templateUrl: './assignment-day14.component.html',
  styleUrls: ['./assignment-day14.component.scss']
})
export class AssignmentDay14Component implements OnInit {
  roomTypeList: InputObj[] = [
    { id: 1, label: 'Single $100', value: 100 },
    { id: 2, label: 'Double $250', value: 250 },
    { id: 3, label: 'King $400', value: 400 },
    { id: 4, label: 'Luxury $500', value: 500 }
  ];
  wifiSetting: InputObj[] = [
    { id: 1, label: 'Yes', value: 5 },
    { id: 2, label: 'No', value: 0 }
  ];
  bookingForm!: BookingFormGroup;
  NUMBER_OF_NOTE = 5000;
  minDate = new Date();

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog) {
    this.bookingForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: [''],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, ValidateTelephone]],
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      numberOfGuest: [0, Validators.pattern('^[0-9]*$')],
      roomType: [100],
      wifiOption: [0, Validators.required],
      totalCost: [0],
      specialRequirements: ['', Validators.maxLength(this.NUMBER_OF_NOTE)]
    }) as BookingFormGroup;
  }

  ngOnInit(): void {
    this.calculateTotalCost();
  }

  get bookingFormControl() {
    return this.bookingForm.controls;
  }

  onSubmit() {
    this.dialog.open(InfoDialogComponent, {
      width: '595px',
      data: this.bookingForm.value,
      panelClass: 'user-dialog'
    });
  }

  calculateTotalCost() {
    if (!this.bookingForm.value.roomType) {
      return;
    }
    const totalVal = parseInt(this.bookingForm.value.roomType.toString()) + this.bookingForm.value.wifiOption;
    this.bookingForm.patchValue({
      totalCost: totalVal
    });
  }
}
