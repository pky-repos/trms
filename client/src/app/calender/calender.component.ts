import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {CreateReservationComponent} from '../create-reservation/create-reservation.component';

import {TableSchedule} from '../models/TableSchedule';
import {Table} from '../models/Table';

import {TileComponent} from '../tile/tile.component';

import {CommonService} from '../common.service';
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
  openHours: string[];
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

    this.currentDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');

    this.commonService.getCurrentDate().subscribe((date) => {
      this.currentDate = date;
      this.fillTable();
    })

    this.opening = 11;
    this.closing = 21;

    this.openHours = Array(this.closing - this.opening).
      fill(0).map((x, i)=> ((i + this.opening).toString() + ':00'));
    console.log(this.openHours);
    
    this.fillTable();
  }

  fillTable() {
  {

   console.log('inside fillTable');
   this.tablesReservations = [];
    this.httpCient.get('http://localhost:3000/api/table/get_tables').subscribe(data => {
      this.tables = data['tables'];

      this.tables.forEach(table => {
        this.httpCient.get('http://localhost:3000/api/table/get_table_reservations/' + table['id'] + '/' + this.currentDate)
        .subscribe(tableReservation => {
         
          this.tablesReservations.push({
            tableId: table['id'],
            slot: Array(this.closing - this.opening).fill({}).map((val, index)=>(
              {
                'start': this.opening + index,
                'end': this.opening + index + 1,
                'reservation_id': 0
              }
            )).map(slot => {
              
              //console.log('before - ',table['id'], slot['start'], slot['reservation_id']);

              tableReservation['reservations'].forEach(reservation => {
                if (reservation['attributes']['slot_start'] == slot['start']) {
                  slot['reservation_id'] = reservation['reservation_id'];
                }
              });
              
              //console.log('after- - ',table['id'], slot['start'], slot['reservation_id']);

              return slot['reservation_id'];
            })
          });
          //console.log(this.tablesReservations);
        },
        err => console.log(err) );
      });
    });
    
    console.log('Reservations - ', this.tablesReservations);
    
  }
  }

  trackMouse(e, tableId, slot){
    console.log('mouse X = ', e.clientX, ' Y = ', e.clientY, tableId, slot);
    // this.showForm = !this.showForm;
   
    this.openDialog(tableId, slot);

  }

  openDialog(tableId, slot): void {
    this.dialogRef = this.dialog.open(CreateReservationComponent, {
      width: '600px',
      height: '350px',
      data: {currentDate: this.currentDate, tableId: tableId, slot: slot}
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.fillTable();
    });
  }

}
