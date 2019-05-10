import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import {pedidoInterface} from '../modelos/pedido.models';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor (private afs: AngularFirestore) { }
  private pedidoColeccion: AngularFirestoreCollection<pedidoInterface>;
  private pedidos: Observable<pedidoInterface[]>;
  private pedidosDocumento: AngularFirestoreDocument<pedidoInterface>;
  private pedido: Observable<pedidoInterface>;
  public selectedPedido: pedidoInterface = {
    id: null,
  };

  obtenerPedido(){
    this.pedidoColeccion = this.afs.collection<pedidoInterface>('pedido');
    return this.pedidos = this.pedidoColeccion.snapshotChanges()
    .pipe(map(changes => { 
      return changes.map(action => {
        const data = action.payload.doc.data() as pedidoInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  guardarPedido(pedido:pedidoInterface){

   this.afs.collection('pedido').add(pedido);
  
  }
}
