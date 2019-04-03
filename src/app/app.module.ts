import { BrowserModule } from '@angular/platform-browser';
import { NgModule, HostListener } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule, MatNativeDateModule, MatSlideToggleModule} from '@angular/material';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import {environment} from '../environments/environment';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MynavComponent } from './components/mynav/mynav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule,
  MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
  MatFormFieldModule, MatPaginatorModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProductosComponent } from './components/productos/productos.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { ComprasComponent } from './components/compras/compras.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { AgregarproducutoComponent } from './components/agregarproducuto/agregarproducuto.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { ComentarioService } from './servicio/comentario.service';


import { ToastrModule } from 'ngx-toastr';
import { VentasComponent } from './components/ventas/ventas.component';
import { ComentarioListComponent } from './components/comentario-list/comentario-list.component';
import { ScrollDispatchModule, CdkScrollable, ScrollingModule } from '@angular/cdk/scrolling';
import { AuthguardarService } from './servicio/authguardar.service';
import { NoticiasListComponent } from './components/noticias-list/noticias-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MynavComponent,
    LoginComponent,
    InicioComponent,
    ContactoComponent,
    ProductosComponent,
    PedidosComponent,
    NoticiasComponent,
    RegistrarseComponent,
    VentasComponent,
    ComprasComponent,
    ComentariosComponent,
    UsuariosComponent,
    AgregarproducutoComponent,
    PresentacionComponent,
    ComentarioListComponent,
    NoticiasListComponent,

  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatTooltipModule,
    MatCardModule,
    MatTableModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatSlideToggleModule,
    MatCardModule,
    AngularFireModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatGridListModule,
    ScrollingModule,
    MatGridListModule
  
 
  ],
  providers: [ComentarioService,AngularFirestore,AngularFireAuth],
  bootstrap: [AppComponent],
  entryComponents: [AgregarproducutoComponent, ProductosComponent, RegistrarseComponent, PresentacionComponent, 
  PedidosComponent, VentasComponent]
})
export class AppModule { }
