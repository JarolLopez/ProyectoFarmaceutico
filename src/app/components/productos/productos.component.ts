import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource} from '@angular/material';
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
import Swal from 'sweetalert2';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
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

  getListarProductos(){
    this.dataProducto.obtenerProducto()
    .subscribe(productos => {
      this.dataSource.data = productos;
    })
  }

  onActualizarProductos(producto: productoInterface) {
   
    const dialogRef = this.dialog.open(AgregarproducutoComponent);
    this.dataProducto.selectedProducto = Object.assign({},producto);

    dialogRef.afterClosed().subscribe(result => {
<<<<<<< HEAD
      console.log(`Dialog result: ${result}`);
    });
  }
=======
    console.log(`Dialog result: ${result}`);
  });
}

borrarProducto(idProducto: string): void{
    
  Swal.fire({
    title: 'Está seguro de eliminar',
    text:"Esta acción no se puede revertir",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: 'red',
    cancelButtonColor: 'blue',
    confirmButtonText: 'Estoy seguro'
  }).then((result) =>{
    if (result.value) {
      this.dataProducto.borrarProducto(idProducto);
      Swal.fire({
        type: 'success',
        title: 'Producto eliminado',
        showConfirmButton: false,
        timer: 1500
      })
    }
  })
}
>>>>>>> 003b70c8f76a4e9c9f4361feb88ba2839c35d48d
}
