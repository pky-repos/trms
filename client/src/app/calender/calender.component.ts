import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { config } from '../config';
import { Reservation, Attributes, ContactDetails } from '../models/Reservation';
import { CreateReservationComponent } from '../create-reservation/create-reservation.component';
import { Table } from '../models/Table';
import { TileComponent } from '../tile/tile.component';
import { DragdropDirective } from '../dragdrop.directive';
import { CommonService } from '../common.service';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit, OnDestroy, OnChanges {

  currentDate: string;
  openHours: any[];
  tables: Table[];
  tablesReservations: any[] = [];
  tempTR: any[] = [];
  slotInit: any[] = [];
  slots: any[] = [];

  showForm: boolean = false;

  dialogRef: any;

  getTableSub: Subscription;
  getCurrentDateSub: Subscription;

  constructor(private httpCient: HttpClient, private datepipe: DatePipe,
    private commonService: CommonService, public dialog: MatDialog) { }

  ngOnInit() {

    this.getTableSub = this.commonService.getTable().subscribe((data) => {
      console.log('Calender - getTable observer');
      this.tables = data['tables'];
      this.tablesReservations = data['tablesReservations'];
    });

    this.openHours = this.commonService.getOpenHours();

    this.currentDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');

    this.getCurrentDateSub = this.commonService.getCurrentDate().subscribe((date) => {
      this.currentDate = date;
      // this.commonService.fillTable();
    });

    // this.commonService.fillTable();
  }

  trackMouse(e, tableId, slot) {
    console.log('calender - mouse X = ', e.clientX, ' Y = ', e.clientY, tableId, slot);
    this.openDialog(tableId, slot);
  }

  openDialog(tableId, slot): void {
    this.dialogRef = this.dialog.open(CreateReservationComponent, {
      width: config.reservationFormWidth,
      height: config.reservationFormHeight,
      data: {
        "from": "calender",
        "data": new Reservation('', new Attributes(new Date(this.currentDate),
          this.openHours[slot].start.value, this.openHours[slot].end.value, 0, tableId, '',
          new ContactDetails('', ''), [''], ''))
      }
    });

    this.dialogRef.afterClosed().subscribe(result => {
      this.commonService.fillTable();
    });
  }

  ngOnChanges() {
    console.log('Calender - ngOnChanges');
    // if (this.getTableSub) {
    //   this.getTableSub.unsubscribe();
    // }
    // if (this.getCurrentDateSub) {
    //   this.getCurrentDateSub.unsubscribe();
    // }
  }

  ngOnDestroy() {
    console.log('Calender - ngOnDestroy');
    if (this.getTableSub) {
      this.getTableSub.unsubscribe();
    }
    if (this.getCurrentDateSub) {
      this.getCurrentDateSub.unsubscribe();
    }
  }
}
