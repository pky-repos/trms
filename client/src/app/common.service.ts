import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { config } from './config';
import { environment } from '../environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class CommonService {
  public currentDateSubject = new ReplaySubject<string>(1);
  public gridSubject = new ReplaySubject<any>(1);

  //tr: any;
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

    return this.currentDateSubject.asObservable();
  }

  getTable(): Observable<any> {
    console.log('Service - getTable observable');

    return this.gridSubject.asObservable();
  }

  fillTable() {

    console.log('Service - fillTable function');

    this.httpCient.get(environment.api + 'api/table/get_tables').subscribe(tableData => {
      console.log('service - tableData ',tableData);

      this.currentDateSubject.subscribe(date => {

        let tables = [];
        tables = tableData['tables'];
        console.log('service - http - get_tables', tables);

        let tr = [];

        let tableProcessedCount = 0;
        tables.forEach(table => {
          console.log('forEach table', table['id']);
          
          console.log('service - http - get_table_reservations query ',  table['id'] + '/' + date);
          
          this.httpCient.get(environment.api + 'api/table/get_table_reservations/' + table['id'] + '/' + date)
            .subscribe(tableReservation => {

              console.log('service - http - get_table_reservations- result - ', tableReservation);
              tableProcessedCount++;

              tr.push({
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

              if(tableProcessedCount == tables.length) {

                let sortFn = function (a, b) {
                  return a.tableId - b.tableId;
                }
                tr.sort(sortFn);
                console.log('service - tablesreservations - sorted', tr);
        
                this.gridSubject.next({
                  'tables': tables.sort(),
                  'tablesReservations': tr
                });
              }


            },
            err => console.log(err),
            () => {
            });
        });



      })
    }, err => console.log(err),
      () => {
      })
    console.log('service - fillTable end');
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
