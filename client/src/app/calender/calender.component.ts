import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Reservation, Attributes, ContactDetails} from '../models/Reservation';
import { CreateReservationComponent } from '../create-reservation/create-reservation.component';

import { Table } from '../models/Table';

import { TileComponent } from '../tile/tile.component';

import { DragdropDirective } from '../dragdrop.directive';

import { CommonService } from '../common.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {

  currentDate: string;
  opening: number;
  closing: number;
  openHours: any[];
  tables: Table[];
  tablesReservations: any[] = [];
  tempTR: any[] = [];
  slotInit: any[] = [];
  slots: any[] = [];

  showForm: boolean = false;

  dialogRef: any;

  constructor(private httpCient: HttpClient, private datepipe: DatePipe,
    private commonService: CommonService, public dialog: MatDialog) { }

  ngOnInit() {

    this.commonService.getTable().subscribe((data) => {
      this.tables = data['tables'];
      console.log('display view works', data);
      this.tablesReservations = data['tablesReservation'];
    });

    this.opening = 11;
    this.closing = 21;


    this.openHours = Array(this.closing - this.opening).
      fill(0).map((x, i) => ((i + this.opening).toString() + ':00'));

    this.currentDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');

    this.commonService.getCurrentDate().subscribe((date) => {
      this.currentDate = date;
      this.commonService.fillTable();
    });

    this.openHours = Array(this.closing - this.opening).
      fill(0).map((x, i) => ((i + this.opening)));
    console.log(this.openHours);

    this.commonService.fillTable();
  }

  trackMouse(e, tableId, slot) {
    console.log('calender - mouse X = ', e.clientX, ' Y = ', e.clientY, tableId, slot);
    this.openDialog(tableId, slot);
  }

  openDialog(tableId, slot): void {
    this.dialogRef = this.dialog.open(CreateReservationComponent, {
      width: '700px',
      height: '350px',
      data: {"from":"calender", "data": new Reservation('', new Attributes(new Date(this.currentDate),
      +this.openHours[slot], +this.openHours[slot + 1], 0, tableId, '',
      new ContactDetails('', ''), [''], ''))}
      
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.commonService.fillTable();
    });
  }

}
