import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ThrowStmt } from '@angular/compiler';
import { BookingServiceProvider } from '../../providers/booking-service/booking-service';
import { Booking } from './booking.model';
import { ReservePage } from '../reserve/reserve';

@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html'
})
export class BookingPage {
  id: number;
  showtime: Booking;

  constructor(public navCtrl: NavController, public navParams: NavParams, public bookingService: BookingServiceProvider) {
    this.id = this.navParams.get('Id');
    console.log(this.id);
  }
  ionViewDidLoad() {
    this.booking();
  }


  booking() {
    this.bookingService.getBooking(this.id).then((res: Booking) => {
      // console.log(res);
      this.showtime = res;
      console.log(this.showtime);
    }, err => {
      console.log(err);
    })
  }

  gotoReserve(date,time){
    const data ={
      id: this.showtime.id,
      name: this.showtime.name,
      date: date,
      time: time,
      image: this.showtime.image
    }
    this.navCtrl.push(ReservePage,{reserve:data});
    // console.log(data);
  }
}
