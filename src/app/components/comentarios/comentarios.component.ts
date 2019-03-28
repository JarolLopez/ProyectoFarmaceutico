import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { ComentarioService } from '../../servicio/comentario.service';

import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  f = new Date();
   fecha=this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();

 

  
  constructor(private service: ComentarioService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) { }

 

  ngOnInit() {
   
    this.resetForm();
    this.service.formData.fecha=this.fecha;
  }

  resetForm(form?: NgForm) {
    if (form != null){
     
      this.service.formData.fecha=this.fecha;
    
    }
    this.service.formData = {
     id:null,
      email: '',
      fecha: this.fecha,
      informacion: '',
  
    }
  }



  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null)
      this.firestore.collection('comments').add(data);
    else
      this.firestore.doc('comments/' + form.value.id).update(data);
    this.resetForm(form);
    this.toastr.success('Se esta enviando...', 'Registro de comentarios');
  }
}