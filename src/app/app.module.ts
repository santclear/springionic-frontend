import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
	/* TODO: 1. Todas as páginas serão carregas quando a aplicação subir. 
	Isso pode deixar a app lenta, uma abordagem é implementar as páginas orientadas por módulos,
	ou seja, para cada página deve ser criado um módulo correspondente*/ 
	declarations: [
		MyApp
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
	],
	bootstrap: [IonicApp],
	/* TODO: 1. Todas as páginas serão carregas quando a aplicação subir. 
	Isso pode deixar a app lenta, uma abordagem é implementar as páginas orientadas por módulos,
	ou seja, para cada página deve ser criado um módulo correspondente*/ 
	entryComponents: [
		MyApp
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
	]
})
export class AppModule { }
