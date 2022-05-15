import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardLazyComponent } from './guard-lazy.component';

const routes: Routes = [{ path: '', component: GuardLazyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuardLazyRoutingModule { }
