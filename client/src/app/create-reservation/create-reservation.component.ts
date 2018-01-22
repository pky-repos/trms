import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { FormControl, ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { Table } from '../models/Table';
import { Reservation, Attributes, ContactDetails, Tag } from '../models/Reservation';

import { CommonService } from '../common.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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
  from: string;

  constructor(private httpCient: HttpClient, private datepipe: DatePipe,
    private commonService: CommonService, public dialogRef: MatDialogRef<CreateReservationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Reservation, private fb: FormBuilder) { }

  ngOnInit() {

    this.opening = 11;
    this.closing = 21;

    this.openHours = Array(this.closing - this.opening).
      fill(0).map((x, i) => ({ 'value': i + this.opening, 'display': (i + this.opening).toString() + ':00' }));
    console.log('openhours-', this.openHours);

    this.reservation = new Reservation('', new Attributes(new Date(0, 0), 0, 0, 0, 0, '',
      new ContactDetails('', ''), [''], ''));
    this.reservationTypes = ['Walk-In', 'Phone', 'Online'];
    this.showReservationForm = false;


    this.tags = ['Birthday', 'Anniversary', 'A la carte/ Buffet', 'Zomato/ Dineout', 'Outside Requested',
      'Indoor Requested', 'Window Requested', 'Smoking Area'].map((tag, i) => {
        return { name: tag, value: i, checked: false }
      });

    this.statuses = ['Arrived', 'Seated', 'Finished', 'Cancel', 'No-Show'];

    this.httpCient.get('http://localhost:3000/api/table/get_tables').subscribe(data => {
      this.tableList = data['tables'].map(table => (table['id']));
      console.log(data);
    });

    console.log(this.data);

    if (Object.keys(this.data).length != 0) {
      this.reservation = this.data['data'];
      console.log('data from tile', this.reservation.attributes);
    }

    this.createForm();

  }

  createForm() {
    this.reservationForm = this.fb.group({
      type: [this.reservation.type || '', Validators.required],
      attributes: this.fb.group({
        date_time: [this.reservation.attributes.date_time || '', Validators.required],
        slot_start: [this.reservation.attributes.slot_start || '', Validators.required],
        slot_end: [this.reservation.attributes.slot_end || '', Validators.required],
        guest_count: [this.reservation.attributes.guest_count || '', Validators.required],
        table_number: [this.reservation.attributes.table_number || '', Validators.required],
        mobile: [this.reservation.attributes.guest_mobile_num || ''],
        contact_details: this.fb.group({
          name: [this.reservation.attributes.contact_details.name || ''],
          email: [this.reservation.attributes.contact_details.email || ''],
        }),
        tags: [this.reservation.attributes.tags || ''],
        status: [this.reservation.attributes.status || '']
      })

    });
  }

  hideCreateReservationForm() {

    this.dialogRef.close();
    // document.getElementById("createReservationForm").style.display = 'none';
  }

  onReservationSubmit() {

    this.httpCient.post('http://localhost:3000/api/reservation/add_reservation',
      this.reservationForm.value).subscribe(data => {
      console.log(data);
      this.dialogRef.close(data);
    },
      err => console.log(err));
    this.reservation = new Reservation('', new Attributes(new Date(0, 0), 0, 0, 0, 0, '',
      new ContactDetails('', ''), [''], ''));
  }

  update() {
    this.httpCient.put('http://localhost:3000/api/reservation/update_reservation/' + 
      this.data['data']['reservation_id'], this.reservationForm.value).subscribe(data => {
      console.log(data);
      this.dialogRef.close(data);
    },
      err => console.log(err));
  }

  delete() {
    this.httpCient.delete('http://localhost:3000/api/reservation/delete_reservation/' + 
    this.data['data']['reservation_id']).subscribe(data => {
    console.log(data);
    this.dialogRef.close(data);
  },
    err => console.log(err));
  }
}
