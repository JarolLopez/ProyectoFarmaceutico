
import {DataserviceService} from '../../servicio/dataservice.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { noticiasinterface } from 'src/app/modelos/noticias.models';



@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  f = new Date();
  fecha=this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();



 
 constructor(public service: DataserviceService,
   public firestore: AngularFirestore,
   public toastr: ToastrService) { }



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
     titulo: '',
     fecha: this.fecha,
     contenido: '',
    imagen: '',
 
 
   }
 }



 onSubmit(form: NgForm) {
   let data = Object.assign({}, form.value);
   delete data.id;
   if (form.value.id == null)
     this.firestore.collection('noticias').add(data);
   else
     this.firestore.doc('noticias/' + form.value.id).update(data);
   this.resetForm(form);
   this.toastr.success('Se esta enviando...', 'Registro de comentarios');
 }
}