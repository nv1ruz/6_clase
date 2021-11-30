import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { NgFormComponent } from './components/ng-form/ng-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    NgFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
