import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import { detallepedidoInterface } from '../modelos/detallepedido.models';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';


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
}
