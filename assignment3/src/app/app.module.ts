import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';
import { LogComponent } from './log/log.component';
import { LogRecordComponent } from './log-record/log-record.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayDetailsComponent,
    LogComponent,
    LogRecordComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
