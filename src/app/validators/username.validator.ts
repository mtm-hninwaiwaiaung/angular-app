import { AbstractControl, AsyncValidatorFn, ValidationErrors, } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserService } from '../services/user.service';

export class UsernameValidator {
    static createValidator(userService: UserService): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors> => {
            return userService
                .checkIfUsernameExists(control.value)
                .pipe(
                    map((result: boolean) =>
                        result ? { userNameAlreadyExists: true } : null as any
                    )
                );
        };
    }
}