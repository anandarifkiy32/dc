import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MateriPage } from '../pages/materi/materi';
import { QuizPage } from '../pages/quiz/quiz';
import { PendahuluanPage } from '../pages/pendahuluan/pendahuluan';
import { MuatanlistrikPage } from '../pages/muatanlistrik/muatanlistrik';
import { KuatarusPage } from '../pages/kuatarus/kuatarus';
import { MuatantotalPage } from '../pages/muatantotal/muatantotal';
import { HukumohmPage } from '../pages/hukumohm/hukumohm';
import { HambatanPage } from '../pages/hambatan/hambatan';
import { HambatanseriPage } from '../pages/hambatanseri/hambatanseri';
import { HambatanparalelPage } from '../pages/hambatanparalel/hambatanparalel';
import { HambatangabunganPage } from '../pages/hambatangabungan/hambatangabungan';
import { HukumkirchoffPage } from '../pages/hukumkirchoff/hukumkirchoff';
import { JembatanwsPage } from '../pages/jembatanws/jembatanws';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MateriPage,
    QuizPage,
    PendahuluanPage,
    MuatanlistrikPage,
    KuatarusPage,
    MuatantotalPage,
    HukumohmPage,
    HambatanPage,
    HambatanseriPage,
    HambatanparalelPage,
    HambatangabunganPage,
    HukumkirchoffPage,
    JembatanwsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MateriPage,
    QuizPage,
    PendahuluanPage,
    MuatanlistrikPage,
    KuatarusPage,
    MuatantotalPage,
    HukumohmPage,
    HambatanPage,
    HambatanseriPage,
    HambatanparalelPage,
    HambatangabunganPage,
    HukumkirchoffPage,
    JembatanwsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
