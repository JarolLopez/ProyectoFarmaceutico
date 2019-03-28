import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import {ventasInterface} from '../modelos/ventas.models';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private afs: AngularFirestore) { }
  private ventaColeccion: AngularFirestoreCollection<ventasInterface>;
  private ventas: Observable<ventasInterface[]>;
  private ventasDocumentos: AngularFirestoreDocument<ventasInterface>;
  private venta: Observable<ventasInterface>;
  public selectedVenta: ventasInterface = {
    id: null,
  };

  obtenerVentas(){
    this.ventaColeccion = this.afs.collection<ventasInterface>('productos');
    return this.ventas = this.ventaColeccion.snapshotChanges()
    .pipe(map(changes => { 
      return changes.map(action => {
        const data = action.payload.doc.data() as ventasInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }
}
