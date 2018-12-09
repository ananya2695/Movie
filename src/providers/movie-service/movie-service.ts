import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MovieServiceProvider Provider');
  }
  getMovie() {
    return new Promise((resolve, reject) => {
      this.http.get('http://demo7209573.mockable.io/train/movie').subscribe(res => {
        // console.log(res);
        resolve(res);
      }, err => {
        // console.log(err);
        reject(err);
      })
    })
  }
}
