import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { PagetestPage } from "../pages/pagetest/PagetestPage";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {  PortofolioPage } from '../pages/portofolio/portofolio';
import {  AnnuairePage } from '../pages/annuaire/annuaire';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PagetestPage,
    PortofolioPage,
    AnnuairePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PagetestPage,
    PortofolioPage,
    AnnuairePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
