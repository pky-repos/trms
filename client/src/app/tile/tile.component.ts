import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Reservation} from '../models/Reservation';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {CreateReservationComponent} from '../create-reservation/create-reservation.component';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input()
  reservation_id: number;

  showForm: boolean; 

  tile_data: any;

  // @HostListener('dragenter', ['$event'])
  // onDragEnter(event) {
  //   console.log(event);
  // }

  constructor(public dialog: MatDialog, private elementRef: ElementRef, private httpCient: HttpClient) {
    // this.elementRef.nativeElement.draggable = true;
   }

  ngOnInit() {

    console.log(this.reservation_id);
    this.populateTile(this.reservation_id);
  }

  populateTile(id) {
    this.httpCient.get('http://localhost:3000/api/reservation/get_reservation/' + id).subscribe(data => {
      console.log(data['reservation']);
      this.tile_data = data['reservation'] as Reservation;
    });
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(CreateReservationComponent, {
      width: '700px',
      height: '350px',
      data: this.tile_data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
