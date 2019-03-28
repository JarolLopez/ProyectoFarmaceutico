import { Component, OnInit,ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {MatDialog} from '@angular/material';
import {MatPaginator, MatSort} from '@angular/material';
import { RegistrarseComponent } from '../registrarse/registrarse.component';
import {UsuarioService} from '../../servicio/usuario.service';
import {usuarioInterface} from 'src/app/modelos/usuarioo.models';
import {NgForm} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  displayedColumns: string[] = ['Nombre', 'Apellido', 'Correo','Cedula','Edad','Sexo','accion'];
  dataSource = new MatTableDataSource<usuarioInterface>();


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog, private dataUsuario: UsuarioService) {}
  private usuarios: usuarioInterface[];

  openDialog() {
    const dialogRef = this.dialog.open(RegistrarseComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getListarUsuarios();
  }

  getListarUsuarios(){
    this.dataUsuario.obtenerUsuarios()
    .subscribe(usuarios => {
      this.dataSource.data = usuarios;
    })
  }

  onActualizarUsuarios(usuario: usuarioInterface) {
      const dialogRef = this.dialog.open(RegistrarseComponent);
      this.dataUsuario.selectedUsuario = Object.assign({},usuario)

      dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  borrarUsuario(idUsuario: string): void{
    
    Swal.fire({
      title: 'Confirmar eliminar',
      text:"Esta acción no se puede revertir",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'red',
      cancelButtonColor: 'blue',
      confirmButtonText: 'Estoy seguro'
    }).then((result) =>{
      if (result.value) {
        this.dataUsuario.borrarUsuario(idUsuario);
        Swal.fire({
          type: 'success',
          title: 'Usuario eliminado',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }
}
