import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './../../servicio/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mynav',
  templateUrl: './mynav.component.html',
  styleUrls: ['./mynav.component.css']
})
export class MynavComponent {

  public isAuth:Boolean = false;
  public isAdmin:Boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public authService: AuthService,
    public router: Router,
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.onAuth();
  }

  onAuth(): void {
    this.authService.isAuth().subscribe(auth => {
      if(auth) {
        this.isAuth = true;
        const { displayName } = auth;
        console.log('displayName', displayName);
        if(displayName === 'admin') {
          this.isAdmin = true;
          localStorage.setItem('rol','admin')
        }
        else {
          this.isAdmin = false;
          localStorage.setItem('rol','cliente');
        }
      }
      else {
        this.isAuth = false;
        this.isAdmin = false;
      }
    });
  }

  logOut(): void {
    this.authService.logoutUser()
    .then(() => {
      console.log('saliendo');
      this.router.navigate(['/login']);
    })
    .catch(error => {
      console.log('Error al cerrar sesión', error);
    });
  }

}