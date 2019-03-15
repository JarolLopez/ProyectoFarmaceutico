import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Comentario} from '../modelos/comentario.model';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  formData: Comentario;

  constructor(private firestore: AngularFirestore) { }

  getComentario() {
    return this.firestore.collection('comments').snapshotChanges();
  }
}
