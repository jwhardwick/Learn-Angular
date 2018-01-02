import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Tells TypeScript what type FormsModule is (maybe)
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsernameInputComponent } from './username-input/username-input.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';


@NgModule({
  declarations: [
    AppComponent,
    UsernameInputComponent,
    DisplayDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
