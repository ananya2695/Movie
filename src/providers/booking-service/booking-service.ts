import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BookingServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookingServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BookingServiceProvider Provider');
  }

  getBooking(id) {
    return new Promise((resolve, reject) => {
      this.http.get('http://demo7209573.mockable.io/train/movie/showtime/' + id).subscribe(res => {
        // console.log(res);
        resolve(res);
      }, err => {
        // console.log(err);
        reject(err);
      })
    })
  }
}
