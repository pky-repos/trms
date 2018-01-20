import { Component, OnInit, Input } from '@angular/core';
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

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

    console.log(this.reservation_id);
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(CreateReservationComponent, {
      width: '600px',
      height: '300px',
      data: { name: 'pankaj'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
