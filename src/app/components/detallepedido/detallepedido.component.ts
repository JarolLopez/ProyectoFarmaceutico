import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator, MatSort } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialog} from '@angular/material';

import { MatIconModule } from '@angular/material/icon';
import { detallepedidoInterface } from '../../modelos/detallepedido.models';
import { pedidoInterface } from '../../modelos/pedido.models';
import { DetallePedidoService } from '../../servicio/detalle-pedido.service';
import { PedidoService } from '../../servicio/pedido.service';
import {ListaDetalle} from './../../modelos/detalleP.model'

@Component({
  selector: 'app-detallepedido',
  templateUrl: './detallepedido.component.html',
  styleUrls: ['./detallepedido.component.css']
})
export class DetallepedidoComponent implements OnInit {

  displayedColumns: string[] = ['numeroLote', 'presentacion', 'precioUnitario', 'cantidad','subTotal'];
  dataSource = new MatTableDataSource<detallepedidoInterface>();


  @ViewChild(MatPaginator) paginator: MatPaginator;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    public dialog: MatDialog,
    public dataDetallePedido: DetallePedidoService,
    public dataVenta: PedidoService
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getListarDetallePedido();
  }

  getListarDetallePedido(){
    const pedidoId = this.dataVenta.selectedPedido.id;
    this.dataDetallePedido.obtenerPedido(pedidoId)
    .subscribe(pedidos => {
      console.log(pedidos);
      this.dataSource.data = pedidos as detallepedidoInterface[];
      console.log('Arreglo',pedidos)
     // this.dataSource.data=pedidos['producto'] as detallepedidoInterface[];
    })
  }

  guardarVenta() {
    const pedidoId = this.dataVenta.selectedPedido.id;
    this.dataDetallePedido.guardarVenta(pedidoId);
  }

}