import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import { detallepedidoInterface } from '../modelos/detallepedido.models';
import { pedidoInterface } from '../modelos/pedido.models';
import { ventaInterface } from '../modelos/ventas.model';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DetallePedidoService {

  constructor (private afs: AngularFirestore) { }
  private pedidoColeccion: AngularFirestoreCollection<detallepedidoInterface>;
  private pedidos: Observable<detallepedidoInterface[]>;
  private pedidosDocumento: AngularFirestoreDocument<detallepedidoInterface>;
  private pedido: Observable<detallepedidoInterface>;
  public selectedPedido: detallepedidoInterface = {
  };

  obtenerPedido(pedidoId){
    this.pedidoColeccion = this.afs.collection<detallepedidoInterface>('pedido').doc(pedidoId).collection('detallePedido');
    return this.pedidos = this.pedidoColeccion.snapshotChanges()
    .pipe(map(changes => { 
      return changes.map(action => {
        const data = action.payload.doc.data() as detallepedidoInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  guardarVenta(pedidoId) {
    const pedidoCollection = this.afs.collection<pedidoInterface>('pedido');
    console.log('ID: ', pedidoId)
    pedidoCollection.doc(pedidoId).snapshotChanges()
    .pipe(map(changes => {

      console.log('Doc: ', changes);
      const pedido:pedidoInterface = { ...changes.payload.data() }
      pedido.entregado = true;
      pedidoCollection.doc(pedidoId).update(pedido)

      const ventaCollection = this.afs.collection<ventaInterface>('venta');
      let venta:ventaInterface;
      venta.id = pedido.id;
      venta.numeroVenta = pedido.numeroPedido;
      venta.fechaVenta = pedido.fechaPedido;
      venta.usuario = pedido.usuario;
      venta.direccion = pedido.direccion;
      console.log('Guardado!!!!!')
      ventaCollection.add(venta)
      .then(() => {
        console.log('Guardado!!!!!')
      })
      
    }))
  }

}