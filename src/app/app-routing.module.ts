import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages
import { TemplateFormExampleComponent } from './pages/template-form-example/template-form-example.component';
import { ReactiveFormExampleComponent } from './pages/reactive-form-example/reactive-form-example.component';
import { AssignmentDay11Component } from './pages/assignment-day11/assignment-day11.component';
import { AssignmentDay12Component } from './pages/assignment-day12/assignment-day12.component';
import { CustomValidatorComponent } from './pages/custom-validator/custom-validator.component';
import { InterfaceExampleComponent } from './pages/interface-example/interface-example.component';
import { AssignmentDay14Component } from './pages/assignment-day14/assignment-day14.component';
import { MaterialTableExampleComponent } from './pages/material-table-example/material-table-example.component';
import { Day20RouteComponent } from './pages/day20-route/day20-route.component';
import { GuardExampleComponent } from './pages/guard-example/guard-example.component';
import { GuardChildExampleComponent } from './pages/guard-child-example/guard-child-example.component';
import { GuardDeactivateComponent } from './pages/guard-deactivate/guard-deactivate.component';
import { AssignmentDay22Component } from './pages/assignment-day22/assignment-day22.component';

// guards
import { AuthGuard } from './guards/auth.guard';
import { AuthChildGuard } from './guards/auth-child.guard';
import { AuthDeactivateGuard } from './guards/auth-deactivate.guard';
import { AuthCanLoadGuard } from './guards/auth-can-load.guard';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  { path: 'template', component: TemplateFormExampleComponent },
  { path: 'reactive', component: ReactiveFormExampleComponent },
  { path: 'member/register', component: AssignmentDay11Component },
  { path: 'day12', component: AssignmentDay12Component },
  { path: 'custom/validator', component: CustomValidatorComponent },
  { path: 'interface', component: InterfaceExampleComponent },
  { path: 'day14', component: AssignmentDay14Component },
  { path: 'table', component: MaterialTableExampleComponent },
  { path: 'day20-route', component: Day20RouteComponent },
  {
    path: 'guard',
    component: GuardExampleComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthChildGuard],
    children: [
      { path: 'child', component: GuardChildExampleComponent }
    ]
  },
  { path: 'guard/deactivate', component: GuardDeactivateComponent, canDeactivate: [AuthDeactivateGuard] },
  {
    path: 'guard-lazy',
    loadChildren: () => import('./pages/guard-lazy/guard-lazy.module').then(m => m.GuardLazyModule),
    canLoad: [AuthCanLoadGuard]
  },
  {
    path: 'day22/:id', component: AssignmentDay22Component, canActivate: [UserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
