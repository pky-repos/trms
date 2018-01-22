import { Injectable } from '@angular/core';
// var Rx = require('rxjs/Rx');
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CommonService {
  public currentDateSubject = new Subject<string>();
  public gridSubject = new Subject<any>();
  tr: any;

  opening: any;
  closing: any;
  openHours: any;
  tables: any;

  constructor(private httpCient: HttpClient) {
    this.opening = 11;
    this.closing = 21;

    this.openHours = Array(this.closing - this.opening).
      fill(0).map((x, i) => ((i + this.opening).toString() + ':00'));
  }

  setCurrentDate(date: string) {
    this.currentDateSubject.next(date);
  }

  getCurrentDate(): Observable<string> {
    return this.currentDateSubject.asObservable();
  }

  getTable() {
    return this.gridSubject.asObservable();
  }

  fillTable(date: string) {
    
      console.log('inside fillTable');
      this.tr = [];
      this.httpCient.get('http://localhost:3000/api/table/get_tables').subscribe(data => {
        this.tables = data['tables'];
        console.log('tables - ', this.tables);

        data['tables'].forEach(table => {
          this.httpCient.get('http://localhost:3000/api/table/get_table_reservations/' + table['id'] +
           '/' + date)
            .subscribe(tableReservation => {

              this.tr.push({
                tableId: table['id'],
                slot: Array(this.closing - this.opening).fill({}).map((val, index) => (
                  {
                    'start': this.opening + index,
                    'end': this.opening + index + 1,
                    'reservation_id': 0
                  }
                )).map(slot => {

                  tableReservation['reservations'].forEach(reservation => {
                    if (reservation['attributes']['slot_start'] == slot['start']) {
                      slot['reservation_id'] = reservation['reservation_id'];
                    }
                  });

                  return slot['reservation_id'];
                })
              });
            },
            err => console.log(err));
        });
        console.log('tables - ', this.tables);
        this.gridSubject.next({'tables': this.tables, 'tablesReservation':this.tr });
      
      });

   
  }
}
