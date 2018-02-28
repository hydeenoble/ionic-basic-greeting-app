import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  personName: string;

  constructor(private toast: ToastController) {

  }

  showGreeting(name: string){
    console.log(name);
    if(name){
      this.toast.create({
        message: `Hello ${name}`,
        duration: 3000,
      }).present();
    }else{
      this.toast.create({
        message: `Hello friend, Please enter your name for greetings!`,
        duration: 3000,
      }).present();
    }

  }

}
