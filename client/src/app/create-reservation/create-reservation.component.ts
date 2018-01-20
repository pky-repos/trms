import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import {FormControl, ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';

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

  opening: number;
  closing: number;

  openHours: any[];

  reservation: Reservation;
  reservationTypes: [string];
  showReservationForm: boolean;

  tags: any;

  statuses: [string];

  tableList: number;

  reservationForm: FormGroup;

  constructor(private httpCient: HttpClient,  private datepipe: DatePipe,  
    private commonService: CommonService, public dialogRef: MatDialogRef<CreateReservationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) { }

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

    this.createForm();
 
  }

  createForm() {
    this.reservationForm = this.fb.group({
      type: ['',  Validators.required],
      attributes: this.fb.group({
        date_time: [this.reservation.attributes.date_time, Validators.required],
        slot_start: [this.reservation.attributes.slot_start,  Validators.required],
        slot_end: [this.reservation.attributes.slot_end,  Validators.required],
        guest_count: ['',  Validators.required],  
        table_number: [this.reservation.attributes.table_number,  Validators.required],
        mobile: '',
        contact_details: this.fb.group({
          name: '',
          email: '',
        }),
        tags: '',
        status: ''
      })
      
    });
  }

  hideCreateReservationForm() {
    this.dialogRef.close();
    // document.getElementById("createReservationForm").style.display = 'none';
  }

  onReservationSubmit() {

  

      console.log('reactive form data' ,this.reservationForm.value);
     
      this.reservation.attributes.slot_start = +(this.reservation.attributes.slot_start.toString().split(":")[0]);
      this.reservation.attributes.slot_end = +this.reservation.attributes.slot_end.toString().split(":")[0];

      // this.reservationForm.get('attributes.slot_start').value =  +(this.reservationForm.get('attributes.slot_start').toString().split(":")[0]);
      // this.tags = this.tags.filter(tag => tag.checked).map(tag => (tag.name));
      // console.log('reactive tagform- ', this.tagForm);
      // console.log('reactive tagForm.value- ', this.tagForm.value);
      // this.reservation.attributes.tags = this.tagForm.value;

      let reservationFormData = this.reservationForm.value;

      console.log('RFD - ', reservationFormData);
      reservationFormData['attributes']['slot_start'] = reservationFormData['attributes']['slot_start'].toString().split(":")[0];
      reservationFormData['attributes']['slot_end'] = reservationFormData['attributes']['slot_end'].toString().split(":")[0];

      this.httpCient.post('http://localhost:3000/api/reservation/add_reservation', reservationFormData).subscribe(data=>{
        console.log(data);
        this.dialogRef.close(data);
      },
      err => console.log(err));
      this.reservation = new Reservation('', new Attributes(new Date(0, 0), 0, 0, 0, 0, '', 
      new ContactDetails('', ''), [new Tag('', 0, false)], ''));    

      
      // this.hideCreateReservationForm(); 
      
  } 
}
