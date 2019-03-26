import { Component, OnInit, Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {PresentacionComponent} from '../presentacion/presentacion.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';


import {PresentacionService} from '../../servicio/presentacion.service';
import {presentacionInterface} from 'src/app/modelos/presentacion.model';
import {NgForm} from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-agregarproducuto',
  templateUrl: './agregarproducuto.component.html',
  styleUrls: ['./agregarproducuto.component.css']
})
export class AgregarproducutoComponent implements OnInit {
  dataSource: any;

  constructor(
    public dialog: MatDialog, private dataPresentacion: PresentacionService) { }
    private presentaciones: presentacionInterface[];

 
  openDialog1() {
    const dialogRef = this.dialog.open(PresentacionComponent,);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  ngOnInit() {
    this.getListarPresentacion();
  }

  getListarPresentacion(){
    this.dataPresentacion.obtenerPresentacion()
    .subscribe(presentaciones => {
      this.presentaciones = presentaciones;
    })
  }

 
}
export class InputOverviewExample {
  


}