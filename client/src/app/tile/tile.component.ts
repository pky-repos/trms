import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {config} from '../config';
import {Reservation} from '../models/Reservation';
import {CreateReservationComponent} from '../create-reservation/create-reservation.component';
import {CommonService} from '../common.service';

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

  private currentDate: string;


  constructor(public dialog: MatDialog, private elementRef: ElementRef, 
    private httpCient: HttpClient, private commonService: CommonService) {
    // this.elementRef.nativeElement.draggable = true;
   }

  ngOnInit() {

    console.log(this.reservation_id);
    this.populateTile(this.reservation_id);
  }

  populateTile(id) {
    this.httpCient.get('api/reservation/get_reservation/' + id).subscribe(data => {
      this.tile_data = data['reservation'] as Reservation;
    });
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(CreateReservationComponent, {
      width: config.reservationFormWidth,
      height: config.reservationFormHeight,
      data: {"from":"tile", "data": this.tile_data}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.commonService.fillTable();
    });
  }
}
