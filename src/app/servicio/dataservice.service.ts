import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { noticiasinterface} from '../modelos/noticias.models';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  formData: noticiasinterface;

  constructor(private firestore: AngularFirestore) { }

  getnoticias() {
    return this.firestore.collection('noticias').snapshotChanges();
  }
}
