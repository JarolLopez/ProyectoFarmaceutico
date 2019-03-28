import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import {MatPaginator, MatSort} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import { Chain } from '@angular/compiler';
import { Pipe, PipeTransform} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {ventasInterface} from '../../modelos/ventas.models';
import {VentasService} from '../../servicio/ventas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  displayedColumns: string[] = ['descripcionProducto','codigoProducto', 'cantidad', 'PrecioUnitario', 'precioTotal', 'fechaVenta', 'direccion'];
  dataSource = new MatTableDataSource<ventasInterface>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private dataVenta: VentasService) { }

  ngOnInit() {  
    this.dataSource.paginator = this.paginator;
    this.getListarVentas();
  }

  getListarVentas(){
    this.dataVenta.obtenerVentas()
    .subscribe(ventas => {
      this.dataSource.data = ventas;
    })
  }

}
