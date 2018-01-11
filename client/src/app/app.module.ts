import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { CalenderComponent } from './calender/calender.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateReservationComponent,
    CalenderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
