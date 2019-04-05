import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import {productoInterface} from '../modelos/producto.models';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private afs: AngularFirestore) { }
  private productoColeccion: AngularFirestoreCollection<productoInterface>;
  private productos: Observable<productoInterface[]>;
  private productosDocumentos: AngularFirestoreDocument<productoInterface>;
  private producto: Observable<productoInterface>;
  public selectedProducto: productoInterface = {
    id: null,
  };

  obtenerProducto(){
    this.productoColeccion = this.afs.collection<productoInterface>('productos');
    return this.productos = this.productoColeccion.snapshotChanges()
    .pipe(map(changes => { 
      return changes.map(action => {
        const data = action.payload.doc.data() as productoInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  obtenerProductosPorVencerse(fecha:Date) {
    this.productoColeccion = this.afs.collection<productoInterface>('productos', ref => ref.where('fechaVencimiento', '<=', fecha));
    return this.productos = this.productoColeccion.snapshotChanges()
    .pipe(map(changes => { 
      return changes.map(action => {
        const data = action.payload.doc.data() as productoInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  AgregarProducto(producto: productoInterface): void {
    delete producto.id;
    this.productoColeccion.add(producto);
  }

  ActualizarProducto(producto: productoInterface): void {
    let idProducto = producto.id;
    this.productosDocumentos = this.afs.doc<productoInterface>(`productos/${idProducto}`);
    this.productosDocumentos.update(producto);
  }

  borrarUsuario(idProducto: string): void {
    this.productosDocumentos = this.afs.doc<productoInterface>(`productos/${idProducto}`);
    this.productosDocumentos.delete();
  }
}
