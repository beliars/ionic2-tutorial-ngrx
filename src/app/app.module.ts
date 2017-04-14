import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from './pages/home-page/home-page';
import { DetailsPage } from './pages/details-page/details-page';

import { StoreModule } from '@ngrx/store';
import { BirthdaysActions } from './actions/birthdays.actions';
import { NavActions } from './actions/nav.actions';
import { BirthdayEffects } from './effects/birthdays.effects';
import { NavsEffects } from './effects/navs.effects';
import { BirthdayService } from './services/birthday.service';
import { AboutPage } from './pages/about-page/about-page';

import { reducer } from './reducers';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    StoreModule.provideStore(reducer),
    EffectsModule.run(BirthdayEffects),
    EffectsModule.run(NavsEffects)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BirthdaysActions,
    NavActions,
    BirthdayService
  ]
})
export class AppModule {}
