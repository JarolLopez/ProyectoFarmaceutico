import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../servicio/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public isAuth:Boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.onAuth();
  }

  onAuth(): void {
    this.authService.isAuth().subscribe(auth => {
      if(auth) {
        this.isAuth = true;
      }
      else {
        this.isAuth = false;
      }
    });
  }

}
