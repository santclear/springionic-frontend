import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CategoriaService } from '../services/domain/categoria.service';
import { ErrorInterceptorProvider } from '../interceptors/error-interceptor';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { ClienteService } from '../services/domain/cliente.service';
import { AuthInterceptorProvider } from '../interceptors/auth-interceptor';

@NgModule({
	/* TODO: 1. Todas as páginas serão carregas quando a aplicação subir. 
	Isso pode deixar a app lenta, uma abordagem é implementar as páginas orientadas por módulos,
	ou seja, para cada página deve ser criado um módulo correspondente*/ 
	declarations: [
		MyApp
	],
	imports: [
		BrowserModule,
		HttpClientModule,
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
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		CategoriaService,
		ErrorInterceptorProvider,
		AuthService,
		StorageService,
		ClienteService,
		AuthInterceptorProvider
	]
})
export class AppModule { }
