import { Component, OnInit } from '@angular/core';
import {ConexfirebaseService} from '../conexfirebase.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  constructor(private conexfirebaseservice: ConexfirebaseService) { }

  information: string;

  ngOnInit() {
  }

}
