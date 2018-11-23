import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnnuairePage } from '../annuaire/annuaire';

/**
 * Generated class for the PortofolioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-portofolio',
  templateUrl: 'portofolio.html',
})
export class PortofolioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  gotoannuaire()
  {
    this.navCtrl.push(AnnuairePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PortofolioPage');
  }

}
