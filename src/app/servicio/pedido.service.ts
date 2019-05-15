import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import {pedidoInterface} from '../modelos/pedido.models';
import {detallepedidoInterface} from './../modelos/detallepedido.models';
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
  public selectedDetallePedido: detallepedidoInterface={
    
  }

  public idPedido;

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

  guardarPedido(pedido:pedidoInterface,detalle=[]){
   
   this.afs.collection('pedido').add(pedido).then(doc=>{
    this.idPedido=doc.id,
    console.log('IdPediGuardP',this.idPedido),
    detalle.forEach((item) => {
      console.log('IdPedi',this.idPedido),
      this.afs.collection('pedido').doc(this.idPedido).collection('detallePedido').add({cantidadP: item.cantidadP, ...item.producto})
    })
  
   })
  
  }

}
