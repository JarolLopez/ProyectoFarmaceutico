import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import {environment} from '../environments/environment';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MynavComponent } from './mynav/mynav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule,
  MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
  MatFormFieldModule, MatPaginatorModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductosComponent } from './productos/productos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { ComprasComponent } from './compras/compras.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AgregarproducutoComponent } from './agregarproducuto/agregarproducuto.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ComentarioService } from './servicio/comentario.service';

import { ToastrModule } from 'ngx-toastr';
import { VentasComponent } from './ventas/ventas.component';
import { ComentarioListComponent } from './comentario-list/comentario-list.component';

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
    ComentarioListComponent
  
  
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
    MatGridListModule
  ],
  providers: [ComentarioService, AngularFirestore],
  bootstrap: [AppComponent],
  entryComponents: [AgregarproducutoComponent, ProductosComponent, RegistrarseComponent, PresentacionComponent, ]
})
export class AppModule { }
