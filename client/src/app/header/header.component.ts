import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {CreateReservationComponent} from '../create-reservation/create-reservation.component';

import {Table} from '../models/Table';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private currentDate: Number = Date.now();
  private table: Table;
  private sections: [string]
  private capacities: [Number];
  private showReservationForm: boolean;
  private showAddTableForm: boolean;
  
  constructor(private httpCient: HttpClient) { }

  ngOnInit() {
    this.table = new Table('', 0);
    this.sections = ['Indoor', 'Outdoor'];
    this.capacities = [1, 2, 3, 4, 5, 6, 7, 8];
    this.showAddTableForm = false;
    this.showReservationForm = false;
  }

  addTable() {
    console.log('add table');
    this.showAddTableForm = !this.showAddTableForm;

   
   
  }

  createReservation() {
    console.log('create Reservation');
    this.showReservationForm = !this.showReservationForm;
  }

 

  onSubmit() {
 if(this.table.section != '' && this.table.capacity != 0){
      let newTable = new Table(this.table.section, this.table.capacity);
      
        this.httpCient.post('http://localhost:3000/api/table/add_table',this.table).subscribe(data=>{
          console.log(data);
        },
        err => console.log(err));
        this.showAddTableForm = !this.showAddTableForm;
        this.table = new Table('', 0);
    }
  }
}
