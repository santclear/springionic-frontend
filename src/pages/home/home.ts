import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage() // Permite referenciar a classe por meio de String, Exemplo: 'HomePage'
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController) {

	}

}
