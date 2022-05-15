import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { GuardDeactivateComponent } from '../pages/guard-deactivate/guard-deactivate.component';

@Injectable({
  providedIn: 'root'
})
export class AuthDeactivateGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: GuardDeactivateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate() || window.confirm("Are you sure?");
  }

}
