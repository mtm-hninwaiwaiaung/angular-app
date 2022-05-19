import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  of,
  map,
  first,
  combineLatest,
  switchMap,
  mergeMap,
  Subject,
  takeUntil,
  distinctUntilChanged,
  from,
  debounceTime
} from 'rxjs';

@Component({
  selector: 'app-day25-rxjs',
  templateUrl: './day25-rxjs.component.html',
  styleUrls: ['./day25-rxjs.component.scss']
})
export class Day25RxjsComponent implements OnInit {

  stopSubject$ = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.usageofDebounceTime();
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

  usageOfRxJSswitchMap() {
    const switched = of(2, 3, 5).pipe(
      switchMap((x: number) => of(x, x ** 2, x ** 3))
    );
    switched.subscribe(x => console.log(x));
  }

  usageOfRxJSmergeMap() {
    // free api url
    const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';

    // click event from browser
    const click$ = fromEvent(document, 'click');

    click$
      .pipe(
        mergeMap(() => ajax.getJSON(API_URL))
      ).subscribe((ret) => {
        console.log(ret);
      });
  }

  usageOfRxJSTakeUntil() {
    // stop emitting values in 1s
    of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 17, 15, 16, 17, 18, 19, 20)
      .pipe(
        takeUntil(this.stopSubject$)
      ).subscribe((value) => {
        console.log('Value: ' + value)
        if (value >= 10) {
          this.stopSubject$.next(true);
        }
      });
  }

  usageOfRxJSdistinctUntilChange() {
    of(1, 1, 1, 2, 2, 2, 1, 1, 3, 3)
      .pipe(
        distinctUntilChanged()
      ).subscribe((value) => {
        console.log('Value: ' + value);
      });
  }

  usageofDebounceTime() {
    const clicks = fromEvent(document, 'click');
    // wait 3second.
    const result = clicks.pipe(debounceTime(3000));
    result.subscribe(x => console.log(x));
  }

  usageOFOperator() {
    //emits values of any type
    const source = of({ name: 'Brian' }, [1, 2, 3], function hello() {
      return 'Hello';
    });
    const subscribe = source.subscribe(val => console.log(val));
  }

  usageFROMOperator() {
    //emit array as a sequence of values
    const arraySource = from([1, 2, 3, 4, 5]);
    console.log('number output: ')
    arraySource.subscribe(val => console.log(val));

    //emit string as a sequence
    const source = from('Hello World');
    console.log('string output: ')
    source.subscribe(val => console.log(val));
  }

  usageAJAXOperator() {
    const githubUsers = `https://api.github.com/users?per_page=2`;
    // getJSON similar with http get request.
    const users = ajax.getJSON(githubUsers);

    users.subscribe({
      next: res => console.log(res),
      error: err => console.log(err)
    });
  }
}
