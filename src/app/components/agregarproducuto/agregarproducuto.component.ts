import { Component, OnInit, Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {PresentacionComponent} from '../presentacion/presentacion.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';


import {PresentacionService} from '../../servicio/presentacion.service';
import {presentacionInterface} from 'src/app/modelos/presentacion.model';
import {NgForm} from '@angular/forms';
import Swal from 'sweetalert2';
import { ProductoService } from 'src/app/servicio/producto.service';


@Component({
  selector: 'app-agregarproducuto',
  templateUrl: './agregarproducuto.component.html',
  styleUrls: ['./agregarproducuto.component.css']
})
export class AgregarproducutoComponent implements OnInit {
  dataSource: any;
  public presentacion;
  public direccion:string;

  constructor(
    public dataProducto: ProductoService,public dialog: MatDialog, public dataPresentacion: PresentacionService) { }
    public presentaciones: presentacionInterface[];

 
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

  onSaveProducto(formProducto: NgForm): void {
    //Nuevo
    if(formProducto.valid){
      if(formProducto.value.id==null)
      {
        console.log('id',formProducto.value.id);
        this.dataProducto.AgregarProducto(formProducto.value);
        formProducto.reset();
        this.dialog.closeAll();
      }
      else
      {
        this.dataProducto.ActualizarProducto(formProducto.value)
        formProducto.reset();
        this.dialog.closeAll();
      }
    }
}

 
}
export class InputOverviewExample {
  


}