import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ClassificacaoPage } from '../pages/classificacao/classificacao';
import { JogosPage } from '../pages/jogos/jogos';
import { PalpitePage } from '../pages/palpite/palpite';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { ClassificacaoWsProvider } from '../providers/classificacao-ws/classificacao-ws';
import { JogosWsProvider } from '../providers/jogos-ws/jogos-ws';

@NgModule({
  declarations: [
    MyApp,
    ClassificacaoPage,
    JogosPage,
    PalpitePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ClassificacaoPage,
    JogosPage,
    PalpitePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ClassificacaoWsProvider,
    JogosWsProvider
  ]
})
export class AppModule {}
