import { Component, OnInit } from '@angular/core';
import { AgregarproducutoComponent } from '../agregarproducuto/agregarproducuto.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import { LoginComponent } from '../login/login.component';
import {MatIconModule} from '@angular/material/icon';

import {FormControl, Validators,ReactiveFormsModule} from '@angular/forms';
import {PresentacionService} from '../../servicio/presentacion.service';
import {NgForm} from '@angular/forms';
import {presentacionInterface } from 'src/app/modelos/presentacion.model';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  constructor(public dataPresentacion: PresentacionService,public dialog:MatDialog) { }

  ngOnInit() {
  }

  guardarPresentacion(formPresentacion: NgForm): void {
    //Nuevo
    if(formPresentacion.valid){
    if(formPresentacion.value.id==null)
    {
      console.log('id',formPresentacion.value.id);
      this.dataPresentacion.AgregarPresentacion(formPresentacion.value);
      formPresentacion.reset();
      this.dialog.closeAll();
      }
    }
  }
}
 
