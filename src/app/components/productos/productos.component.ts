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
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  displayedColumns: string[] = ['presentacion','numeroLote', 'precioUnitario', 'cantidad', 'fechaVencimiento', 'accion'];
  dataSource = new MatTableDataSource<productoInterface>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

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
    this.getListarProductos();
  }

  getListarProductos(){
    this.dataProducto.obtenerProducto()
    .subscribe(productos => {
      this.dataSource.data = productos;
    })
  }

  onActualizarProductos(producto: productoInterface) {
    const dialogRef = this.dialog.open(AgregarproducutoComponent);
    this.dataProducto.selectedProducto = Object.assign({},producto)

    dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
}
