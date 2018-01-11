import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Jogo } from '../../models/jogo';
import { Fase } from '../../models/fase';

@IonicPage()
@Component({
  selector: 'page-palpite',
  templateUrl: 'palpite.html',
})
export class PalpitePage {

  private jogo: Jogo;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {
       console.log(">>02:" + (this.navParams.get('fase')).getDescricao());
  }

  public dismiss(): void {
    this.viewCtrl.dismiss();
  }

}
