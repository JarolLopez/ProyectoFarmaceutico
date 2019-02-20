import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductosComponent } from './productos/productos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { VentasComponent } from './ventas/ventas.component';
import { ComprasComponent } from './compras/compras.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'registrarse', component: RegistrarseComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'pedidos', component: PedidosComponent},
  {path: 'noticias', component: NoticiasComponent},
  {path: 'ventas', component: VentasComponent},
  {path: 'compras', component: ComprasComponent},
  {path: 'comentarios', component: ComentariosComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: '**', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
