import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

import {AngularFirestore} from '@angular/fire/firestore';
import { ventaInterface } from '../modelos/ventas.model';


@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

 // Barra
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Ventas' },
  ];

  constructor (private afs: AngularFirestore) { }

  ngOnInit() {
    this.obtenerProductoMasVendidos();
  }

  obtenerProductoMasVendidos() {
    var ventas:ventaInterface[] = [];
    let meses = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
    let ventasFilas = [0,0,0,0,0,0,0,0,0,0,0,0];
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    this.afs.collection<ventaInterface>('venta').get().toPromise().then((data) => {
      data.forEach(doc => {

        const venta = { ...doc.data() } as ventaInterface;

        const timestamp = venta.fechaVenta['seconds'];
        
        const fecha = new Date(timestamp * 1000);

        const from1 = new Date(currentYear, 0, 1);
        const to1 = new Date(currentYear, 0, 31);
        if(fecha >= from1 && fecha <= to1) {
          //enero
          ventasFilas[0] = ventasFilas[0] + venta.total;
        }

        const from2 = new Date(currentYear, 1, 1);
        const to2 = new Date(currentYear, 1, 28);
        if(fecha >= from2 && fecha <= to2) {
          //febrero
          ventasFilas[1] = ventasFilas[1] + venta.total;
        }

        const from3 = new Date(currentYear, 2, 1);
        const to3 = new Date(currentYear, 2, 31);
        if(fecha >= from3 && fecha <= to3) {
          //marzo
          ventasFilas[2] = ventasFilas[2] + venta.total;
        }

        const from4 = new Date(currentYear, 3, 1);
        const to4 = new Date(currentYear, 3, 30);
        if(fecha >= from4 && fecha <= to4) {
          //abril
          ventasFilas[3] = ventasFilas[3] + venta.total;
        }

        const from5 = new Date(currentYear, 4, 1);
        const to5 = new Date(currentYear, 4, 31);
        if(fecha >= from5 && fecha <= to5) {
          //mayo
          ventasFilas[4] = ventasFilas[4] + venta.total;
        }

        const from6 = new Date(currentYear, 5, 1);
        const to6 = new Date(currentYear, 5, 30);
        if(fecha >= from6 && fecha <= to6) {
          //junio
          ventasFilas[5] = ventasFilas[5] + venta.total;
        }

        const from7 = new Date(currentYear, 6, 1);
        const to7 = new Date(currentYear, 6, 31);
        if(fecha >= from7 && fecha <= to7) {
          //julio
          ventasFilas[6] = ventasFilas[6] + venta.total;
        }

        const from8 = new Date(currentYear, 7, 1);
        const to8 = new Date(currentYear, 7, 31);
        if(fecha >= from8 && fecha <= to8) {
          //agosto
          ventasFilas[7] = ventasFilas[7] + venta.total;
        }

        const from9 = new Date(currentYear, 8, 1);
        const to9 = new Date(currentYear, 8, 30);
        if(fecha >= from9 && fecha <= to9) {
          //septiembre
          ventasFilas[8] = ventasFilas[8] + venta.total;
        }

        const from10 = new Date(currentYear, 9, 1);
        const to10 = new Date(currentYear, 9, 31);
        if(fecha >= from10 && fecha <= to10) {
          //octubre
          ventasFilas[9] = ventasFilas[9] + venta.total;
        }

        const from11 = new Date(currentYear, 10, 1);
        const to11 = new Date(currentYear, 10, 30);
        if(fecha >= from11 && fecha <= to11) {
          //noviembre
          ventasFilas[10] = ventasFilas[10] + venta.total;
        }

        const from12 = new Date(currentYear, 11, 1);
        const to12 = new Date(currentYear, 11, 31);
        if(fecha >= from12 && fecha <= to12) {
          //diciembre
          ventasFilas[11] = ventasFilas[11] + venta.total;
        }

        ventas.push(venta);

      })

      this.barChartData = [
        { data: ventasFilas, label: 'Ventas' },
      ];

      console.log(ventasFilas);

    })

  }

}