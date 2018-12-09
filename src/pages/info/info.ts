import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage {
result: any;
  constructor(public navCtrl: NavController, public navParams:NavParams ) {
    this.result = this.navParams.get('result');
    console.log(this.result);

  }

}
