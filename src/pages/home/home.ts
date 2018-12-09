import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieServiceProvider } from '../../providers/movie-service/movie-service';
import { Movie } from './home.model';
import { BookingPage } from '../booking/booking';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  movieList: Array<Movie>;

  constructor(
    public navCtrl: NavController, public movieService: MovieServiceProvider) {
       

  }

  ionViewDidLoad() {
    this.showMovie();
  }

  showMovie(){
    this.movieService.getMovie().then((res: Array<Movie>) => {
      this.movieList = res;
      // console.log(this.productList);
    }, err => {
      console.log(err);
    });
  }

  gotoBooking(id){
    this.navCtrl.push(BookingPage, { Id: id})
  }

}
