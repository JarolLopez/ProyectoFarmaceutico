import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Chain } from '@angular/compiler';
import { Pipe, PipeTransform} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import { AgregarproducutoComponent } from '../agregarproducuto/agregarproducuto.component';
import {PresentacionComponent} from '../presentacion/presentacion.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import { LoginComponent } from '../login/login.component';
import {MatIconModule} from '@angular/material/icon';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','accion'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);



  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(
    public dialog: MatDialog
  ) { }

  openDialog() {
    const dialogRef = this.dialog.open(AgregarproducutoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialog1() {
    const dialogRef = this.dialog.open(PresentacionComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
