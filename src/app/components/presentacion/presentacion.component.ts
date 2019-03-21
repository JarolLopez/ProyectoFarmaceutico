import { Component, OnInit } from '@angular/core';
import { AgregarproducutoComponent } from '../agregarproducuto/agregarproducuto.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import { LoginComponent } from '../login/login.component';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  constructor() { }

  information: string;

  ngOnInit() {
  }

}
 
