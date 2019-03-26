import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,ReactiveFormsModule} from '@angular/forms';
import {UsuarioService} from '../../servicio/usuario.service';
import {NgForm} from '@angular/forms';
import { usuarioInterface } from 'src/app/modelos/usuarioo.models';
import {MatDialog} from '@angular/material';



@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {


  /*
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  */

  constructor(public dataUsuario: UsuarioService,public dialog:MatDialog) { }


  ngOnInit() {
    
  }

  onSaveUsuario(formUsuario: NgForm): void {
    //Nuevo
    if(formUsuario.valid){
    if(formUsuario.value.id==null)
    {
      console.log('id',formUsuario.value.id);
      this.dataUsuario.AgregarUsuario(formUsuario.value);
      formUsuario.reset();
      this.dialog.closeAll();
    }
    else
    {
      this.dataUsuario.ActualizarUsuario(formUsuario.value)
      formUsuario.reset();
      this.dialog.closeAll();
    }
  }
}
}