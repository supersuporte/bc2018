import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClassificacaoWsProvider } from '../../providers/classificacao-ws/classificacao-ws';

@IonicPage()
@Component({
  selector: 'page-classificacao',
  templateUrl: 'classificacao.html',
  providers: [ClassificacaoWsProvider]
})
export class ClassificacaoPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private classificacaoWsProvider: ClassificacaoWsProvider) {
    this.ionViewDidLoad();
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
    this.classificacaoWsProvider.getClassificacao().subscribe (
      data => {
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          console.log(objeto_retorno);
      }, error => {
          console.log(error);
      }
    )
  }

}
