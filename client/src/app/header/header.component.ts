import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {CreateReservationComponent} from '../create-reservation/create-reservation.component';

import {Table} from '../models/Table';
import {Reservation, Attributes, ContactDetails, Tag} from '../models/Reservation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private opening: number;
  private closing: number;
  private openHours: string[];

  private currentDate: Number = Date.now();
  private table: Table;
  private sections: [string]
  private capacities: [Number];
  private showAddTableForm: boolean;

  private reservation: Reservation;
  private reservationTypes: [string];
  private showReservationForm: boolean;

  private tableList: number;

  private tags: any;

  private statuses: [string];

  constructor(private httpCient: HttpClient) { }

  ngOnInit() {
    this.opening = 11;
    this.closing = 21;

    this.openHours = Array(this.closing - this.opening).
      fill(0).map((x, i)=> ((i + this.opening).toString() + ':00'));
    console.log(this.openHours);

    this.table = new Table('', 0);
    this.sections = ['Indoor', 'Outdoor'];
    this.capacities = [1, 2, 3, 4, 5, 6, 7, 8];
    this.showAddTableForm = false;

    this.reservation = new Reservation('', new Attributes(new Date(0, 0), 0, 0, 0, 0, '', 
                                          new ContactDetails('', ''), [new Tag('', 0, false)], ''));
    this.reservationTypes = ['Walk-In','Phone','Online'];
    this.showReservationForm = false;

    this.httpCient.get('http://localhost:3000/api/table/get_tables').subscribe(data => {
      this.tableList = data['tables'].map(table => (table['id']));
      console.log(data);
    });

    this.tags = ['Birthday', 'Anniversary', 'A la carte/ Buffet', 'Zomato/ Dineout', 'Outside Requested',
    'Indoor Requested', 'Window Requested', 'Smoking Area'].map((tag, i) => {
      return {name: tag, value: i, checked: false}
    });

    this.statuses = [ 'Arrived', 'Seated', 'Finished', 'Cancel', 'No-Show'];
  }

  addTable() {
    console.log('add table');
    // this.showAddTableForm = !this.showAddTableForm;
    document.getElementById("me").style.display = 'block';
  }

  createReservation() {
    console.log('create Reservation');
    this.showReservationForm = !this.showReservationForm;
  }

  hideAddTableForm() {
    document.getElementById("me").style.display = 'none';
  }

  onTableSubmit() {
    if(this.table.section != '' && this.table.capacity != 0){
      
        this.httpCient.post('http://localhost:3000/api/table/add_table',this.table).subscribe(data=>{
          console.log(data);
        },
        err => console.log(err));
        this.showAddTableForm = !this.showAddTableForm;
        this.table = new Table('', 0);
        this.hideAddTableForm();    }
  }

  onReservationSubmit() {
    if(this.reservation.type != '' && this.reservation.attributes.table_number != 0){
      
      console.log(this.reservation);
        this.httpCient.post('http://localhost:3000/api/reservation/add_reservation',this.reservation).subscribe(data=>{
          console.log(data);
        },
        err => console.log(err));
        this.showReservationForm = !this.showReservationForm;
        // this.reservation = new Reservation('', new Attributes(new Date(0, 0), 0, 0, 0, 0, '', 
        // new ContactDetails('', ''), [new Tag('', 0, false)], ''));     
       }
  }

  
}
