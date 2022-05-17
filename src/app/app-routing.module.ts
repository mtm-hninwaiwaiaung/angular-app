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
import { AssignmentDay20Component } from './pages/assignment-day20/assignment-day20.component';
import { NotFondPageComponent } from './pages/not-fond-page/not-fond-page.component';
import { Day20RouteComponent } from './pages/day20-route/day20-route.component';
import { GuardExampleComponent } from './pages/guard-example/guard-example.component';
import { GuardChildExampleComponent } from './pages/guard-child-example/guard-child-example.component';
import { GuardDeactivateComponent } from './pages/guard-deactivate/guard-deactivate.component';
import { Day23ResolverComponent } from './pages/day23-resolver/day23-resolver.component';
import { Day24HttpComponent } from './pages/day24-http/day24-http.component';
import { AssignmentDay24Component } from './pages/assignment-day24/assignment-day24.component';
import { PostControlComponent } from './pages/post-control/post-control.component';

// guards
import { AuthGuard } from './guards/auth.guard';
import { AuthChildGuard } from './guards/auth-child.guard';
import { AuthDeactivateGuard } from './guards/auth-deactivate.guard';
import { AuthCanLoadGuard } from './guards/auth-can-load.guard';

// resolvers
import { UserResolver } from './resolvers/user.resolver';
import { PostResolver } from './resolvers/post.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'day12', pathMatch: 'full' },
  { path: 'template', component: TemplateFormExampleComponent },
  { path: 'reactive', component: ReactiveFormExampleComponent },
  { path: 'member/register', component: AssignmentDay11Component },
  { path: 'day12', component: AssignmentDay12Component },
  { path: 'custom/validator', component: CustomValidatorComponent },
  { path: 'interface', component: InterfaceExampleComponent },
  { path: 'day14', component: AssignmentDay14Component },
  { path: 'table', component: MaterialTableExampleComponent },
  { path: 'day20-route', component: Day20RouteComponent },
  { path: 'day20', component: AssignmentDay20Component },
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
    path: 'day23-resolver/:id',
    component: Day23ResolverComponent,
    resolve: { user: UserResolver }
  },
  { path: 'day24-http', component: Day24HttpComponent },
  { path: 'day24', component: AssignmentDay24Component },
  { path: 'post', component: PostControlComponent },
  { path: 'post/:id', component: PostControlComponent, resolve: { post: PostResolver } },
  { path: '**', component: NotFondPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
