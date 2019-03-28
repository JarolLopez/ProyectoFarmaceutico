import { Component, OnInit,ViewChild,ElementRef, } from '@angular/core';
import {FormControl, Validators,ReactiveFormsModule} from '@angular/forms';
import {UsuarioService} from '../../servicio/usuario.service';
import {NgForm} from '@angular/forms';
import { usuarioInterface } from 'src/app/modelos/usuarioo.models';
import {MatDialog} from '@angular/material';
import {AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import {AuthService } from '../../servicio/auth.service';




@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService,) { }
  @ViewChild('imageUser') inputImageUser: ElementRef;

  public email: string = '';
  public password: string = '';
/*
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;

*/
  ngOnInit() {
    
  }

 /*
  onUpload(e) {
    // console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/profile_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
  }
  */
  onAddUser() {
    this.authService.registerUser(this.email,this.password)
      .then((res)=>alert('registrado')).catch((err)=>console.log(err));
  }



  onLoginRedirect(): void {
    this.router.navigate(['/login']);
  }

}