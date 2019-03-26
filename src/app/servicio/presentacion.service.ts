import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import {presentacionInterface} from '../modelos/presentacion.model';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PresentacionService {

  constructor (private afs: AngularFirestore) { }
  private presentacionColeccion: AngularFirestoreCollection<presentacionInterface>;
  private presentaciones: Observable<presentacionInterface[]>;
  private presentacionesDocumento: AngularFirestoreDocument<presentacionInterface>;
  private presentacion: Observable<presentacionInterface>;
  public selectedPresentacion: presentacionInterface = {
    id: null,
  };

  obtenerPresentacion(){
    this.presentacionColeccion = this.afs.collection<presentacionInterface>('presentacion');
    return this.presentaciones = this.presentacionColeccion.snapshotChanges()
    .pipe(map(changes => { 
      return changes.map(action => {
        const data = action.payload.doc.data() as presentacionInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  AgregarPresentacion(presentacion: presentacionInterface): void {
    delete presentacion.id;
    this.presentacionColeccion.add(presentacion);
  }
}
