import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private existingUsernames = ['AyeAye', 'Wutyi', 'Hlaing', 'Myat'];

  checkIfUsernameExists(value: string) {
    return of(this.existingUsernames
      .some((eachUser) => eachUser.toLocaleLowerCase() === value.toLocaleLowerCase()))
      .pipe(
        delay(1000)
      );
  }
}
