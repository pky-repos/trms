import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DatePipe } from '@angular/common';

// var Rx = require('rxjs/Rx');

import {CreateReservationComponent} from '../create-reservation/create-reservation.component';

import {Table} from '../models/Table';
import {Reservation, Attributes, ContactDetails, Tag} from '../models/Reservation';

import {CommonService} from '../common.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private opening: number;
  private closing: number;
  private openHours: string[];

  private currentDate: string;
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

  constructor(private httpCient: HttpClient,  private datepipe: DatePipe,  private commonService: CommonService) { }

  ngOnInit() {

    this.currentDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');

    this.commonService.setCurrentDate(this.currentDate);

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

  prev() {
    console.log(this.currentDate);

    this.currentDate = this.datepipe.transform( new Date(
      new Date(this.currentDate).getFullYear(),
      new Date(this.currentDate).getMonth(),
      new Date(this.currentDate).getDate() - 1
    ), 'yyyy-MM-dd');

    console.log(this.currentDate);

    this.commonService.setCurrentDate(this.currentDate);
  }

  today() {
    this.currentDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    this.commonService.setCurrentDate(this.currentDate);

  }

  next() {
    console.log(this.currentDate);

    this.currentDate = this.datepipe.transform( new Date(
      new Date(this.currentDate).getFullYear(),
      new Date(this.currentDate).getMonth(),
      new Date(this.currentDate).getDate() + 1
    ), 'yyyy-MM-dd');

    console.log(this.currentDate);

    this.commonService.setCurrentDate(this.currentDate);
  }

  addTable() {
    console.log('add table');
    // this.showAddTableForm = !this.showAddTableForm;
    let addTableForm = document.getElementById("addtableform");
    addTableForm.style.display = (addTableForm.style.display == 'block')? 'none': 'block';
  }

  createReservation() {
    console.log('create Reservation');
    let createReservationForm = document.getElementById("createReservationForm");
    createReservationForm.style.display = (createReservationForm.style.display == 'block')? 'none': 'block';  }

  hideAddTableForm() {
    document.getElementById("addtableform").style.display = 'none';
  }

  hideCreateReservationForm() {
    document.getElementById("createReservationForm").style.display = 'none';
  }

  onTableSubmit() {
    if(this.table.section != '' && this.table.capacity != 0){
      
        this.httpCient.post('http://localhost:3000/api/table/add_table',this.table).subscribe(data=>{
          console.log(data);
        },
        err => console.log(err));
        // this.showAddTableForm = !this.showAddTableForm;
        this.table = new Table('', 0);
        this.hideAddTableForm();    }
  }

  onReservationSubmit() {
    if(this.reservation.type != '' && this.reservation.attributes.table_number != 0){

      console.log(this.reservation);
      this.reservation.attributes.slot_start = +(this.reservation.attributes.slot_start.toString().split(":")[0]);
      this.reservation.attributes.slot_end = +this.reservation.attributes.slot_end.toString().split(":")[0];
      
      this.tags = this.tags.filter(tag => tag.checked).map(tag => (tag.name));

      this.reservation.attributes.tags = this.tags;

      this.httpCient.post('http://localhost:3000/api/reservation/add_reservation',this.reservation).subscribe(data=>{
        console.log(data);
      },
      err => console.log(err));
      this.reservation = new Reservation('', new Attributes(new Date(0, 0), 0, 0, 0, 0, '', 
      new ContactDetails('', ''), [new Tag('', 0, false)], ''));    
      this.hideCreateReservationForm(); 
      }
  } 
}
