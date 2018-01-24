import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { FormControl, ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators, AbstractControl} from '@angular/forms';

import { config } from '../config';
import { environment } from '../../environments/environment';
import { ReservationTypes, Tags, Statuses } from '../constants';
import { Table } from '../models/Table';
import { Reservation, Attributes, ContactDetails} from '../models/Reservation';

import { CommonService } from '../common.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { ValidatorFn } from '@angular/forms/src/directives/validators';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.scss']
})
export class CreateReservationComponent implements OnInit {

  openHours: any[];

  reservation: Reservation;
  reservationTypes: string[];
  showReservationForm: boolean;

  tags: any[];

  statuses: string[];

  table: Table;
  tableList: number[];
  guestCountList: number[];

  reservationForm: FormGroup;
  from: string;

  constructor(private httpCient: HttpClient, private datepipe: DatePipe,
    private commonService: CommonService, public dialogRef: MatDialogRef<CreateReservationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Reservation, private fb: FormBuilder) { }

  ngOnInit() {

    this.openHours = this.commonService.getOpenHours();

    this.reservation = new Reservation('', new Attributes(new Date(0, 0), 0, 0, 0, 0, '',
      new ContactDetails('', ''), [''], ''));
    this.reservationTypes = ReservationTypes;
    this.showReservationForm = false;


    this.tags = Tags.map((tag, i) => {
        return { name: tag, value: i, checked: false }
      });

    this.statuses = Statuses;


    this.httpCient.get(environment.api + 'api/table/get_tables').subscribe(data => {
           this.tableList = data['tables'].map(table => (table['id']));
           console.log(data);
         });
   

    console.log(this.data);

    if (Object.keys(this.data).length != 0) {
      this.reservation = this.data['data'] as Reservation;
      console.log('data from tile', this.reservation.attributes);

      let tableId = this.data['data']['attributes']['table_number'];
      this.httpCient.get(environment.api + 'api/table/get_table/' + tableId).subscribe(data => {
        this.table = data['table'][0] as Table;

        this.guestCountList = tableId == 0 ? Array(10).fill(0).map((x, i) => (i + 1)) :
        Array(this.table.capacity).fill(0).map((x, i) => (i + 1))
  
        this.tableList = tableId == 0 ? this.tableList : [tableId];
        this.from = this.data['from'];
        this.createForm();
      });
    }
  }

  createForm() {
    console.log('from - ', this.from);

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
        },
        {validator: this.validateReservation()})
      });
    
  }

  validateReservation(): ValidatorFn {
    return (group: FormGroup): {[key: string]: any} => {
      let start = group.controls['slot_start'].value;
      let end = group.controls['slot_end'].value;
      const slot_valid = start < end ? true: false;
    
      if (!slot_valid) return {
        'diff': start - end
      }
      return null;
    };
  }

  hideCreateReservationForm() {

    this.dialogRef.close();
    // document.getElementById("createReservationForm").style.display = 'none';
  }

  onReservationSubmit() {

    this.httpCient.post(environment.api + 'api/reservation/add_reservation',
      this.reservationForm.value).subscribe(data => {
      console.log(data);
      this.dialogRef.close(data);
    },
      err => console.log(err));
    this.reservation = new Reservation('', new Attributes(new Date(0, 0), 0, 0, 0, 0, '',
      new ContactDetails('', ''), [''], ''));
  }

  update() {
    this.httpCient.put(environment.api + 'api/reservation/update_reservation/' + 
      this.data['data']['reservation_id'], this.reservationForm.value).subscribe(data => {
      console.log(data);
      this.dialogRef.close(data);
    },
      err => console.log(err));
  }

  delete() {
    this.httpCient.delete(environment.api + 'api/reservation/delete_reservation/' + 
    this.data['data']['reservation_id']).subscribe(data => {
    console.log(data);
    this.dialogRef.close(data);
  },
    err => console.log(err));
  }
}
