import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';




import { NavController } from 'ionic-angular';
import { PortofolioPage } from "../portofolio/portofolio";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController , public alertCtrl: AlertController,private splashScreen: SplashScreen ) {}

 
gotoportofolio() 
{
  this.navCtrl.push(PortofolioPage);
}

alert1()
{ this.splashScreen.show();
  const alert = this.alertCtrl.create({
    title: 'Babacar Sylla',
    subTitle: 'WWWWWWWWWAAAAAAAAAZZZZZZZZZZZAAAAAAAAAAA!',
    buttons: ['OK']
  });
  alert.present();
}

}
