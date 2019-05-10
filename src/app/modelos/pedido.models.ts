export interface pedidoInterface {
    numeroPedido?: string;
    usuario?: string;
    fechaPedido?: Date;
    direccion?: string;
    id?: string;
    entregado?: Boolean;
    total?:number;
}