import { Component, OnInit, Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {PresentacionComponent} from '../presentacion/presentacion.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';




@Component({
  selector: 'app-agregarproducuto',
  templateUrl: './agregarproducuto.component.html',
  styleUrls: ['./agregarproducuto.component.css']
})
export class AgregarproducutoComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }
 
  openDialog1() {
    const dialogRef = this.dialog.open(PresentacionComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  ngOnInit() {
  }

 
}
export class InputOverviewExample {
  


}