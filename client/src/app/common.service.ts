import { Injectable } from '@angular/core';
// var Rx = require('rxjs/Rx');
import {Observable, Subject} from 'rxjs';

@Injectable()
export class CommonService {
  public currentDateSubject = new Subject<string>();

  constructor() {
   }  

   setCurrentDate(date: string) {
    this.currentDateSubject.next(date);
   }

   getCurrentDate(): Observable<string>{
    return this.currentDateSubject.asObservable();
   }
}
