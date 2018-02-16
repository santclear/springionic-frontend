import { IonicPageModule } from 'ionic-angular/module';
import { NgModule } from '@angular/core';
import { HomePage } from './home';

// TODO: 1. Solução para o problema de carregamento de todas as páginas quando inicia a app
@NgModule({
	declarations: [HomePage],
	imports: [IonicPageModule.forChild(HomePage)]
})
export class HomeModule { }