import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import {ComentarioService} from 'src/app/servicio/comentario.service';
import {Comentario} from 'src/app/modelos/comentario.model';





@Component({
  selector: 'app-comentario-list',
  templateUrl: './comentario-list.component.html',
  styleUrls: ['./comentario-list.component.css']
})
export class ComentarioListComponent implements OnInit {
  list:Comentario[];
  constructor(private service: ComentarioService,
    private firestore: AngularFirestore,
    private toastr:ToastrService) { }


  
  ngOnInit() {
   
    this.service.getComentario().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Comentario;
      })
    });
  }

  onEdit(com:Comentario) {
    this.service.formData = Object.assign({}, com);
  }

  onDelete(id: string) {
    if (confirm("¿Estás seguro de eliminar este registro?")) {
      this.firestore.doc('comments/' + id).delete();
      this.toastr.warning('Se elimino...','Registro del comentario...');
    }
  }
}