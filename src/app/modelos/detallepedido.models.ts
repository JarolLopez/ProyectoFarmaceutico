import {productoInterface} from './producto.models'
export interface detallepedidoInterface {
    id?: string;
    numeroLote?: string;
    precioUnitario?: string;
    presentacion?: string;
    cantidad?: number;
    entregado?: boolean;
    producto?:productoInterface;
}