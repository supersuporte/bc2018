import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-classificacao',
  templateUrl: 'classificacao.html',
})
export class ClassificacaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  items = [
      '1 Pokémon Yellow',
      '2 Super Metroid',
      '3 Mega Man X',
    ];

  itemSelected(item: string) {
      console.log("Selected Item", item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassificacaoPage');
  }

}
