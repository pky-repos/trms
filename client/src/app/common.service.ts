import { Injectable } from '@angular/core';
var Rx = require('rxjs/Rx');

@Injectable()
export class CommonService {

  constructor() {
    Rx.Observable.of(1,2,3).map(n => (console.log(n))); // etc
  

   }


}
