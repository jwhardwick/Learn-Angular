import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Tells TypeScript what type FormsModule is (maybe)
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AlertsComponent } from './alerts/alerts.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';


@NgModule({ // decorator

  declarations: [ // we have to tell ng what components we are using
    AppComponent,
    ServerComponent,
    ServersComponent,
    AlertsComponent,
    SuccessAlertComponent,
    WarningAlertComponent 
  ],
  imports: [  
    BrowserModule,
    FormsModule
  ],
  providers: [],  

  bootstrap: [AppComponent] // The root component for index.html
})
export class AppModule { }
