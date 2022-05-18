import { Component, OnInit } from '@angular/core';
import { of, map, first, combineLatest } from 'rxjs';

@Component({
  selector: 'app-day25-rxjs',
  templateUrl: './day25-rxjs.component.html',
  styleUrls: ['./day25-rxjs.component.scss']
})
export class Day25RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.usageOfRxJSMap();
  }

  usageOfRxJSMap() {
    const observObj = of(1, 2, 3);
    console.log(observObj);
    observObj.pipe(
      map((num) => num * num)
    ).subscribe((value) => {
      console.log(`value: ${value}`);
    });
  }

  usageOfRxJSFirst() {
    of(1, 2, 3)
      .pipe(first())
      .subscribe((v) => console.log(`value: ${v}`));
  }

  usageOfRxJSCombineLatest() {
    // Define multiple observables
    let color = of('Black', 'Red', 'Blue');
    let brand = of('Jaguar', 'Ford', 'BMW');
    let price = of(100, 200, 300);

    //Call combineLatest operator, inject multiple observables in array
    const joinStream = combineLatest(color, brand, price);

    //Subscibe combineLatest observable
    joinStream.subscribe(([color, brand, price]) => {
      console.log(color + ' ' + brand + ' ' + 'costed me' + ' ' + price);
    });
  }
}
