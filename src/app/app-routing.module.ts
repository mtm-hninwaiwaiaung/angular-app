import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages
import { TemplateFormExampleComponent } from './pages/template-form-example/template-form-example.component';
import { ReactiveFormExampleComponent } from './pages/reactive-form-example/reactive-form-example.component';
import { AsyncValidatorComponent } from './pages/async-validator/async-validator.component';

const routes: Routes = [
  { path: '', component: TemplateFormExampleComponent },
  { path: 'template', component: TemplateFormExampleComponent },
  { path: 'reactive', component: ReactiveFormExampleComponent },
  { path: 'async', component: AsyncValidatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
