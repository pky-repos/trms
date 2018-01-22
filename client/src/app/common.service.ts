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

  currentDate: string;

  constructor(private httpCient: HttpClient) {
    this.opening = 11;
    this.closing = 21;

    this.openHours = Array(this.closing - this.opening).
      fill(0).map((x, i) => ((i + this.opening).toString() + ':00'));
  }

  setCurrentDate(date: string) {
    this.currentDate = date;
    this.currentDateSubject.next(date);
  }

  getCurrentDate(): Observable<string> {
    return this.currentDateSubject.asObservable();
  }

  getTable(): Observable<any> {
    return this.gridSubject.asObservable();
  }

  fillTable() {

    console.log('inside fillTable');
    this.tr = [];
    this.httpCient.get('api/table/get_tables').subscribe(data => {
      this.tables = data['tables'];
      //console.log('service', this.tables);

      data['tables'].forEach(table => {
        // console.log('forEach order', table['id']);
        this.httpCient.get('api/table/get_table_reservations/' + table['id'] +
          '/' + this.currentDate)
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
      console.log('service - tablesreservations - ', this.tr);
      let str = this.tr.sort(function(a,b){
        return a.tableId - b.tableId;   
       });
       console.log('service - tablesreservations - sorted', str);
       
      this.gridSubject.next({ 'tables': this.tables.sort(),
       'tablesReservations': str
      });
    });
  }
}
