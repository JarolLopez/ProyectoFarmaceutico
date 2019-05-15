import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Chain } from '@angular/compiler';
import { Pipe, PipeTransform} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import { AgregarproducutoComponent } from '../agregarproducuto/agregarproducuto.component';
import {PresentacionComponent} from '../presentacion/presentacion.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import { LoginComponent } from '../login/login.component';
import {MatIconModule} from '@angular/material/icon';
import {productoInterface} from '../../modelos/producto.models';
import {ProductoService} from '../../servicio/producto.service';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css']
})
export class InformesComponent implements OnInit {

  displayedColumns: string[] = ['presentacion','numeroLote', 'precioUnitario', 'cantidad', 'fechaVencimiento', 'accion'];
  dataSource = new MatTableDataSource<productoInterface>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public dialog: MatDialog, private dataProducto: ProductoService) { }
  
  private productos: productoInterface[];

  openDialog() {
    const dialogRef = this.dialog.open(AgregarproducutoComponent, {
      height: '500px',
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getListarProductos();
  }

  getListarProductos() {
    let fecha = new Date(Date.now());
    console.log(fecha);
    //fecha.setDate(fecha.getDate());
    let fechaVencimiento = new Date(fecha.getFullYear(), fecha.getMonth() + 1, fecha.getDay() + 15);
    console.log(fechaVencimiento);
    this.dataProducto.obtenerProductosPorVencerse(fechaVencimiento)
    .subscribe(productos => {
      this.dataSource.data = productos;
    })
  }

  public estaVencido(fechaVencimiento) {
    const fechaVencimiento2 = new Date(fechaVencimiento.seconds * 1000);
    let fecha = new Date();
    if(fechaVencimiento2 < fecha) {
      return true;
    }
    else {
      return false;
    }
  }

  onActualizarProductos(producto: productoInterface) {
    const dialogRef = this.dialog.open(AgregarproducutoComponent);
    this.dataProducto.selectedProducto = Object.assign({},producto)

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}