import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AuthService } from 'src/app/servicio/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(public afAuth: AngularFireAuth, public router: Router, public authService: AuthService) { }
  public  email: string 
  public  password: string  


  ngOnInit() {
  }
  onLogingoogle() {
     this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
     this.router.navigate(['/inicio']);
  }
  

  onLogin(): void{
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.authService. loginEmailUser(this.email, this.password)
   .then((res) =>{
    this.router.navigate(['/inicio']);
  }).catch(err=>console.log('err', err.message));

  }

 onLogout() {
   this.authService.logoutUser();
   this.afAuth.auth.signOut();
 }
}
export class InputOverviewExample {


}


