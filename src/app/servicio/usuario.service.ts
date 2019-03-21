import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import {usuarioInterface} from '../modelos/usuarioo.models';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private afs: AngularFirestore) { }
  private usuariosColecion: AngularFirestoreCollection<usuarioInterface>;
  private usuarios: Observable<usuarioInterface[]>;
  private usuariosDocumento: AngularFirestoreDocument<usuarioInterface>;
  private usuario: Observable<usuarioInterface>;
  public selectedUsuario: usuarioInterface = {
    id: null,
  };

  obtenerUsuarios(){
    this.usuariosColecion = this.afs.collection<usuarioInterface>('usuarios');
    return this.usuarios = this.usuariosColecion.snapshotChanges()
    .pipe(map(changes => { 
      return changes.map(action => {
        const data = action.payload.doc.data() as usuarioInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  AgregarUsuario(usuario: usuarioInterface): void {
    delete usuario.id;
    this.usuariosColecion.add(usuario);
  }

  ActualizarUsuario(usuario: usuarioInterface): void {
    let idUsuario = usuario.id;
    this.usuariosDocumento = this.afs.doc<usuarioInterface>(`usuarios/${idUsuario}`);
    this.usuariosDocumento.update(usuario);
  }

  borrarUsuario(idUsuario: string): void {
    this.usuariosDocumento = this.afs.doc<usuarioInterface>(`usuarios/${idUsuario}`);
    this.usuariosDocumento.delete();
  }

};
