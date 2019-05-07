import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import {DataserviceService} from '../../servicio/dataservice.service';
import {noticiasinterface} from 'src/app/modelos/noticias.models';
import { AuthService } from 'src/app/servicio/auth.service';


@Component({
  selector: 'app-noticias-list',
  templateUrl: './noticias-list.component.html',
  styleUrls: ['./noticias-list.component.css']
})
export class NoticiasListComponent implements OnInit {
  list:noticiasinterface[];
  constructor(private service: DataserviceService,
    private firestore: AngularFirestore,
    private toastr:ToastrService) { }

   

public admin=false; 
  
  ngOnInit() {

    if(localStorage.getItem('rol')==='admin'){
      this.admin=true;
    }
   
    this.service.getnoticias().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as noticiasinterface;
      })
    });
  }
  
  onEdit(com:noticiasinterface) {
    this.service.formData = Object.assign({}, com);
  }

  onDelete(id: string) {
    if (confirm("¿Estás seguro de eliminar este registro?")) {
      this.firestore.doc('noticias/' + id).delete();
      this.toastr.warning('Se elimino...','Registro del comentario...');
    }
  }
}