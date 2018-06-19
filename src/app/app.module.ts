import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ConfigComponent } from './config/config.component';
import { ConfigService } from './config.service';
import { HttpClientModule } from '@angular/common/http';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightsService } from './flights.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConfigComponent,
    FlightListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ConfigService,
    FlightsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
