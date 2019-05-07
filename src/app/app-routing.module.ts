import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProductosComponent } from './components/productos/productos.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { AgregarproducutoComponent } from './components/agregarproducuto/agregarproducuto.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { AuthguardarService } from './servicio/authguardar.service';
import { InformesComponent } from './components/informes/informes.component';
import { GuardarpedidoComponent } from './components/guardarpedido/guardarpedido.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent, canActivate:[AuthguardarService]},
  {path: 'registrarse', component: RegistrarseComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contacto', component: ContactoComponent , canActivate:[AuthguardarService]},
  {path: 'productos', component: ProductosComponent},
  {path: 'pedidos', component: PedidosComponent},
  {path: 'noticias', component: NoticiasComponent},
  {path: 'ventas', component: VentasComponent},
  {path: 'comentarios', component: ComentariosComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'informes', component: InformesComponent},
  {path: '**', component: InicioComponent},
  {path: 'agregarproducuto', component: AgregarproducutoComponent},
  {path: 'presentacion', component: PresentacionComponent},
  {path: 'guardarpedido', component: GuardarpedidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
