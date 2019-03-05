import { Injectable } from '@angular/core';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {PresentacionComponent} from '../app/presentacion/presentacion.component';

@Injectable({
  providedIn: 'root'
})
export class ConexfirebaseService {

  presentationList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getPresentation()
  {
    this.presentationList = this.firebase.list('presentation');
  }
  insertPresentation(presentacion: PresentacionComponent)
  {
    this.presentationList.push({
      information: presentacion.information
    })
  }
updatePresentation(presentacion: PresentacionComponent)
{
  this.presentationList.update(presentacion.information, {
    presentation: presentacion.information
  })
}
deletepresentation($key: string){
this.presentationList.remove($key)
}
}
