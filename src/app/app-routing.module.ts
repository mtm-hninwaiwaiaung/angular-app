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
  { path: 'day20', component: AssignmentDay20Component },
  { path: '**', component: NotFondPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
