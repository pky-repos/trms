import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { config } from './config';

@Injectable()
export class CommonService {
  public currentDateSubject = new Subject<string>();
  public gridSubject = new Subject<any>();

  tr: any;
  tables: any;
  currentDate: string;

  constructor(private httpCient: HttpClient) {
  }

  setCurrentDate(date: string) {
    // this.currentDate = date;
    console.log('Service - setCurrentDate function');
    this.currentDateSubject.next(date);
  }

  getCurrentDate(): Observable<string> {
    console.log('Service - getCurrentDate Observable');

    return this.currentDateSubject.asObservable().debounceTime(1000);
  }

  getTable(): Observable<any> {
    console.log('Service - getTable observable');

    return this.gridSubject.asObservable().debounceTime(1000);
  }

  fillTable() {

    console.log('Service - fillTable function');
    this.getCurrentDate().subscribe(date => {

      this.tr = [];

      this.httpCient.get('api/table/get_tables').subscribe(data => {
        this.tables = data['tables'];
        //console.log('service', this.tables);


        data['tables'].forEach(table => {
          // console.log('forEach order', table['id']);
          this.httpCient.get('api/table/get_table_reservations/' + table['id'] + '/' + date)
            .subscribe(tableReservation => {


              this.tr.push({
                tableId: +table['id'],
                slot: Array(config.closing - config.opening).fill({}).map((val, index) => (
                  {
                    'start': config.opening + index,
                    'end': config.opening + index + 1,
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
            err => console.log(err),
            () => {
            });
        });

      }, err => console.log(err),
    () => {

      let sortFn = function (a, b) {
        return a.tableId - b.tableId;
      }
      this.tr.sort(sortFn);
      console.log('service - tablesreservations - sorted', this.tr);

      this.gridSubject.next({
        'tables': this.tables.sort(),
        'tablesReservations': this.tr
      });
    })
    }
    )

  }

  getOpenHours() {
    return Array(config.closing - config.opening).
      fill(0).map((x, i) => {
        return {
          start: {
            value: i + config.opening,
            display: (i + config.opening).toString() + ':00'
          },
          end: {
            value: i + config.opening + 1,
            display: (i + config.opening + 1).toString() + ':00'
          }
        }
      });
  }
}
