import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import {MatPaginator, MatSort} from '@angular/material';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialog} from '@angular/material';
import { DetallepedidoComponent } from '../../detallepedido/detallepedido.component';

import {MatIconModule} from '@angular/material/icon';
import {pedidoInterface} from '../../modelos/pedido.models';
import {PedidoService} from '../../servicio/pedido.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
})

export class PedidosComponent implements OnInit {
  displayedColumns: string[] = ['numeroPedido', 'usuario', 'fechaPedido', 'direccion','verPedido'];
  dataSource = new MatTableDataSource<pedidoInterface>();


  @ViewChild(MatPaginator) paginator: MatPaginator;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    public dialog: MatDialog, public dataVenta: PedidoService
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getListarPedido();
  }
  getListarPedido(){
    this.dataVenta.obtenerPedido()
    .subscribe(pedidos => {
      this.dataSource.data = pedidos;
    })
  }

  
  openDialog(pedido){

    this.dataVenta.selectedPedido = pedido;

    console.log(pedido)

    const dialogRef = this.dialog.open(DetallepedidoComponent, {
      height: '450px',
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    
  }

}
