import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

import {Table} from '../models/Table';
import {Reservation, Attributes, ContactDetails, Tag} from '../models/Reservation';

import {CommonService} from '../common.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.scss']
})
export class CreateReservationComponent implements OnInit {

  private opening: number;
  private closing: number;

  private openHours: any[];

  private reservation: Reservation;
  private reservationTypes: [string];
  private showReservationForm: boolean;

  private tags: any;

  private statuses: [string];

  private tableList: number;

  tagForm = new FormControl();


  constructor(private httpCient: HttpClient,  private datepipe: DatePipe,  
    private commonService: CommonService, public dialogRef: MatDialogRef<CreateReservationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {

    this.opening = 11;
    this.closing = 21;

    this.openHours = Array(this.closing - this.opening).
      fill(0).map((x, i)=> ((i + this.opening).toString() + ':00'));
    console.log(this.openHours);

    this.reservation = new Reservation('', new Attributes(new Date(0, 0), 0, 0, 0, 0, '', 
                                          new ContactDetails('', ''), [new Tag('', 0, false)], ''));
    this.reservationTypes = ['Walk-In','Phone','Online'];
    this.showReservationForm = false;


    this.tags = ['Birthday', 'Anniversary', 'A la carte/ Buffet', 'Zomato/ Dineout', 'Outside Requested',
    'Indoor Requested', 'Window Requested', 'Smoking Area'].map((tag, i) => {
      return {name: tag, value: i, checked: false}
    });

    this.statuses = [ 'Arrived', 'Seated', 'Finished', 'Cancel', 'No-Show'];
       
    this.httpCient.get('http://localhost:3000/api/table/get_tables').subscribe(data => {
      this.tableList = data['tables'].map(table => (table['id']));
      console.log(data);
    });

    console.log(this.data);

    if (Object.keys(this.data).length != 0){
      console.log('coming from calender');
      this.reservation.attributes.date_time =this.data['currentDate'];

      this.reservation.attributes.slot_start = this.openHours[this.data['slot']] ;
      this.reservation.attributes.slot_end = this.openHours[this.data['slot'] + 1] ;
      this.reservation.attributes.table_number = this.data['tableId'];
    }
  }


  hideCreateReservationForm() {
    this.dialogRef.close();
    // document.getElementById("createReservationForm").style.display = 'none';
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
        this.dialogRef.close(data);
      },
      err => console.log(err));
      this.reservation = new Reservation('', new Attributes(new Date(0, 0), 0, 0, 0, 0, '', 
      new ContactDetails('', ''), [new Tag('', 0, false)], ''));    

      
      // this.hideCreateReservationForm(); 
      }
  } 
}
