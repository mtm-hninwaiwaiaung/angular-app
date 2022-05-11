import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // for Template-driven Form
import { ReactiveFormsModule } from '@angular/forms'; // for Reactive Form
import { AngularMaterailModule } from './angular-materail.module';

// pages.
import { AppComponent } from './app.component';
import { TemplateFormExampleComponent } from './pages/template-form-example/template-form-example.component';
import { ReactiveFormExampleComponent } from './pages/reactive-form-example/reactive-form-example.component';
import { AssignmentDay11Component } from './pages/assignment-day11/assignment-day11.component';
import { AssignmentDay12Component } from './pages/assignment-day12/assignment-day12.component';
import { CustomValidatorComponent } from './pages/custom-validator/custom-validator.component';
import { InterfaceExampleComponent } from './pages/interface-example/interface-example.component';
import { AssignmentDay14Component } from './pages/assignment-day14/assignment-day14.component';
import { MaterialTableExampleComponent } from './pages/material-table-example/material-table-example.component';
import { Day21RouteComponent } from './pages/day21-route/day21-route.component';

// components
import { InfoDialogComponent } from './components/info-dialog/info-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormExampleComponent,
    ReactiveFormExampleComponent,
    AssignmentDay11Component,
    AssignmentDay12Component,
    CustomValidatorComponent,
    InterfaceExampleComponent,
    AssignmentDay14Component,
    InfoDialogComponent,
    MaterialTableExampleComponent,
    Day21RouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
