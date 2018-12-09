import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';

/**
 * Generated class for the ReservePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reserve',
  templateUrl: 'reserve.html',
})
export class ReservePage {
  info: any;
  firstname: string;
  lastname: string;
  telephone: string;
  code: string;
  total: number;
  seatList = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.info = this.navParams.get('reserve');
    console.log(this.info);
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.checkSeat();
    }, 1000);
    this.random();
  }

  selectSeat(index) {
    if (!this.info.time.seat[index].check) {
      this.info.time.seat[index].check = true;
      this.seatList.push(this.info.time.seat[index]);
    } else {
      this.info.time.seat[index].check = false;
      this.seatList.splice(this.info.time.seat[index], 1);
    }

  }

  calculate() {
    this.total = 0;
    if (this.info.time && this.info.time.seat.length > 0) {
      this.info.time.seat.forEach(price => {
        if (price.check) {
          this.total += price.price;
        }

      });
    }
    // console.log(total);
    return this.total;
  }

  random() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 11; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    this.code = text;

  }

  gotoInfo() {
    const data = {
      firstname: this.firstname,
      lastname: this.lastname,
      telephone: this.telephone,
      code: this.code,
      movie: {
        id: this.info.id,
        name: this.info.name,
        image: this.info.image,
        price: this.total,
        theater: this.info.time.theater,
        seat: this.seatList,
        date: this.info.date,
        time: this.info.time.time
      }

    }
    this.navCtrl.push(InfoPage, { result: data });
    console.log(data);
  }

  validateData() {
    if (!this.firstname || !this.lastname || !this.telephone || this.seatList.length === 0) {
      return true
    } else {
      return false;
    }
  }

  checkSeat() {
    let checkAlert = true;
    this.info.time.seat.forEach(seat => {
      if (!seat.book) {
        checkAlert = false;
      }
    });
    if (checkAlert) {
      alert('รอบนี้เต็มแล้วค่ะ');
      setTimeout(() => {
        this.navCtrl.pop();
      }, 1000);
    }
  }
}
