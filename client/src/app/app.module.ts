import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { CalenderComponent } from './calender/calender.component';

import {CommonService} from './common.service';
import { TileComponent } from './tile/tile.component';
import { DragdropDirective } from './dragdrop.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateReservationComponent,
    CalenderComponent,
    TileComponent,
    DragdropDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
  entryComponents: [CreateReservationComponent],
  providers: [DatePipe, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
