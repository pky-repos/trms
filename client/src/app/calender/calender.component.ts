import { Component, OnInit } from '@angular/core';
import {TableSchedule} from '../models/TableSchedule';
import {Table} from '../models/Table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {

 
  opening: number;
  closing: number;
  openHours: string[];

  tables: Table[];

  tablesReservations: any[] = [];

  slotInit: any[] = [];

  slots: any[] = [];

  constructor(private httpCient: HttpClient) { }

  ngOnInit() {

    this.opening = 11;
    this.closing = 21;

    this.openHours = Array(this.closing - this.opening).
      fill(0).map((x, i)=> ((i + this.opening).toString() + ':00'));
    console.log(this.openHours);
    

    this.httpCient.get('http://localhost:3000/api/table/get_tables').subscribe(data => {
      this.tables = data['tables'];
      //console.log(data);

      this.tables.forEach(table => {
        this.httpCient.get('http://localhost:3000/api/table/get_table_reservations/' + table['id'])
        .subscribe(tableReservation => {
          
          //this.slots[table['id']] = slotInit;
          //console.log('fresh table slots for table - ', table['id'], slotInit);
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
