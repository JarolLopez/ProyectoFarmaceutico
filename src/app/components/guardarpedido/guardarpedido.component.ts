import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicio/producto.service';
import {ListaDetalle} from './../../modelos/detalleP.model';
import {PedidoService}from './../../servicio/pedido.service';
import {pedidoInterface} from './../../modelos/pedido.models';
import { auth } from 'firebase';

@Component({
  selector: 'app-guardarpedido',
  templateUrl: './guardarpedido.component.html',
  styleUrls: ['./guardarpedido.component.css']
})
export class GuardarpedidoComponent implements OnInit {

  public productos=[];
  public direccion:string='';
  totalPedido = 0;
  public subTotal = 0;
  public cantidad:number=1;
  tempPedido=[];
  public lista:ListaDetalle={};
  public pedido:pedidoInterface={};
 

  constructor(private dataProducto: ProductoService, public pedidoservice:PedidoService) { }

  ngOnInit() {
    this.getListarProductos();
    console.log(this.cantidad);
  
    
   

  }

  getListarProductos() {
    this.dataProducto.obtenerProducto()
    .subscribe(productos => {
      this.productos = productos;
      
    })
  }

  onAddProduct(producto){

    let lista:ListaDetalle={};
    
    
    lista.cantidad=1;
    lista.producto=producto;
    //producto.push(lista)
  
   // this.tempPedido.push(lista);
    this.tempPedido.push(lista);
     console.log(lista);
  }

  actCant(producto) {
    
   return this.subTotal = (producto.producto.precioUnitario * producto.cantidad)
 
  }

 

  getTotalCost() {
    return this.tempPedido.map(t => t.producto.precioUnitario*t.cantidad).reduce((acc, value) => acc + value, 0);
  }
  


  removeItemTempOrder = (lista) => {
    let index = this.tempPedido.indexOf(lista);
    if (index > -1)
    {
      console.log(this.tempPedido[index]);
      /*.tempPedido[index].subTotal*/;
      this.tempPedido.splice(index, 1);
     
    }

 
   
  }

  guardarPedido(){
    if(auth().currentUser===null){
      alert('Inicie sesión')
    }
    else{
      
      
        this.pedidoservice.selectedPedido.usuario=auth().currentUser.email;
    this.pedidoservice.selectedPedido.fechaPedido=new Date;
    this.pedidoservice.selectedPedido.entregado=false;
    this.pedidoservice.selectedPedido.total=this.getTotalCost();
    this.pedidoservice.selectedPedido.direccion=this.direccion;
   // console.log('Datos a guardar',this.pedidoservice.selectedPedido);
    this.pedidoservice.guardarPedido(this.pedidoservice.selectedPedido);
  
    
    
  }
    
    }

}
