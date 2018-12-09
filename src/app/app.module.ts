import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MovieServiceProvider } from '../providers/movie-service/movie-service';
import { Ionic2RatingModule } from 'ionic2-rating';
import { HttpClientModule } from '@angular/common/http';
import { BookingPage } from '../pages/booking/booking';
import { InfoPage } from '../pages/info/info';
import { BookingServiceProvider } from '../providers/booking-service/booking-service';
import { ReservePage } from '../pages/reserve/reserve';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BookingPage,
    InfoPage,
    TabsPage,
    ReservePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BookingPage,
    InfoPage,
    TabsPage,
    ReservePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieServiceProvider,
    BookingServiceProvider
  ]
})
export class AppModule {}
