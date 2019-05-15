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
  private pedidoColeccion2: AngularFirestoreCollection<pedidoInterface>;
  private pedidos: Observable<detallepedidoInterface[]>;
  private pedidos2: Observable<pedidoInterface[]>;
  private pedidosDocumento: AngularFirestoreDocument<detallepedidoInterface>;
  private pedido: Observable<detallepedidoInterface>;
  public selectedPedido: detallepedidoInterface = {
  };

  obtenerPedido(pedidoId){
    this.pedidoColeccion = this.afs.collection<detallepedidoInterface>('pedido')
    .doc(pedidoId)
    .collection('detallePedido');
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

    this.afs.collection('pedido').doc(pedidoId).get().toPromise().then((changes) => {
      const pedido:pedidoInterface = { ...changes.data() }
      pedido.entregado = true;
      console.log("Pedido: ", pedido)
      this.afs.collection('pedido').doc(pedidoId).update(pedido)

      const ventaCollection = this.afs.collection<ventaInterface>('venta');
      let venta:ventaInterface = {};
      venta.id = pedidoId;
      venta.numeroVenta = pedidoId;
      venta.fechaVenta = pedido.fechaPedido;
      venta.fechaEntrega=new Date();
      venta.usuario = pedido.usuario;
      venta.direccion = pedido.direccion;
      venta.total=pedido.total;
      ventaCollection.doc(pedidoId).set(venta)
      .then(() => {
        console.log('Guardado!!!!!')
      })
    })
  }

}