import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from '../models/user.class';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged: any = false;

  constructor(public afAuth:AngularFireAuth) {
    afAuth.authState.subscribe(user=> (this.isLogged=user))
   }
   
   //Register
   async onRegister(user: User){
     console.log("user",user.password);
     try {
       return await this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
     } catch (error) {
       console.log('Erro registrando',error);
     }
   }
   //Login
   async onLogin(user: User){
    try {
      return await this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
    } catch (error) {
      console.log('Error ingresando', error);
    }
  }
}
