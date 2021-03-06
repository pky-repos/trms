import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DatePipe } from '@angular/common';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {config} from '../config';
import { environment } from '../../environments/environment';
import {Sections, Capacities} from '../constants';
import {CreateReservationComponent} from '../create-reservation/create-reservation.component';
import {Table} from '../models/Table';
import {Reservation, Attributes, ContactDetails} from '../models/Reservation';
import {CommonService} from '../common.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentDate: string;
  table: Table;
  sections: string[]
  capacities: Number[];
  showAddTableForm: boolean;

  tableList: number;


  constructor(private httpCient: HttpClient,  private datepipe: DatePipe, 
     private commonService: CommonService, public dialog: MatDialog) { }

  ngOnInit() {

    this.currentDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');

    this.commonService.setCurrentDate(this.currentDate);
    this.commonService.fillTable();

    this.table = new Table('', 0);
    this.sections = Sections;
    this.capacities = Capacities;
    this.showAddTableForm = false;
    
    this.httpCient.get(environment.api + 'api/table/get_tables').subscribe(data => {
      this.tableList = data['tables'].map(table => (table['id']));
    });
  }

  prev() {
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

    console.log(this.currentDate);

  }

  next() {
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
      
        this.httpCient.post(environment.api + 'api/table/add_table',this.table).subscribe(data=>{
          console.log(data);
          this.commonService.fillTable();
        },
        err => console.log(err));
        this.table = new Table('', 0);
        this.hideAddTableForm();   
    }
    
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(CreateReservationComponent, {
      width: config.reservationFormWidth,
      height: config.reservationFormHeight,
      data: {"from": "header", "data": new Reservation('', new Attributes(new Date(this.currentDate), 0, 0, 0, 0, '', 
              new ContactDetails('', ''), [''], ''))}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.commonService.fillTable();

      console.log('The dialog was closed');
    });
  }
}
