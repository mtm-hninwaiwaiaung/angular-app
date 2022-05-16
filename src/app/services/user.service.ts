import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userList = [
    { id: 1, name: 'Kyaw Kyaw', email: 'kyawkyaw@gmail.com', age: 24, hobby: "swimming, reading" },
    { id: 2, name: 'Aye Aye', email: 'ayeaye@gmail.com', age: 28, hobby: "cooking, eating" },
    { id: 3, name: 'Tun Tun', email: 'tuntun@gmail.com', age: 20, hobby: "singing, dancing" }
  ];
  constructor() { }

  getUserInfo(parmaId: string) {
    const id = parseInt(parmaId);
    return of(this.userList
      .find((eachUser) => eachUser.id === id ? eachUser : null))
      .pipe(
        delay(1000)
      );
  }
}
