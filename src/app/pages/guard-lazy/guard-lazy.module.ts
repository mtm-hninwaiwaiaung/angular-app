import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuardLazyRoutingModule } from './guard-lazy-routing.module';
import { GuardLazyComponent } from './guard-lazy.component';


@NgModule({
  declarations: [
    GuardLazyComponent
  ],
  imports: [
    CommonModule,
    GuardLazyRoutingModule
  ]
})
export class GuardLazyModule { }
