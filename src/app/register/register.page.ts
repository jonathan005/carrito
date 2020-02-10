import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {User} from "../models/user.class";
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user:User = new User();
  constructor(private authsrv:AuthService, private router: Router, private toastcontroller: ToastController) { }

  ngOnInit() {
  }
  async onLogin(){
    const user = await this.authsrv.onLogin(this.user);
    if(user){
      this.presentToast('Ingreso exitoso');
      this.router.navigateByUrl('/');
    }else{
      this.presentToast('Usuario no registrado');
    }
  }
  async onRegister(){
    const user = await this.authsrv.onRegister(this.user);
    if (user){
      this.presentToast('Registro existoso');
      this.router.navigateByUrl("/");
    }else{
      //console.log("NO");
    }
  }

  async presentToast(presentar: string) {
    const toast = await this.toastcontroller.create({
      message: presentar,
      duration: 2000
    });
    toast.present();
  }
}
