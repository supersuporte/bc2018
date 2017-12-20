import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClassificacaoWsProvider } from '../../providers/classificacao-ws/classificacao-ws';
import { Classificacao } from '../../models/classificacao';

@IonicPage()
@Component({
  selector: 'page-classificacao',
  templateUrl: 'classificacao.html',
  providers: [ClassificacaoWsProvider]
})
export class ClassificacaoPage {

  public classificacoes = new Array<Classificacao>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private classificacaoWsProvider: ClassificacaoWsProvider) {
  }

  private getClassificacao(): void {
    this.classificacaoWsProvider.getClassificacaoFromWS().subscribe (
      data => {
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          this.classificacoes = this.parseJsonToObj(objeto_retorno.results);
      }, error => {
          console.log(error);
      }
    )
  }

  private parseJsonToObj(json: any): Array<Classificacao> {
    let classificacoes = new Array<Classificacao>();
    for (let j of json) {
      let c = new Classificacao();
      c.setNome(j.original_title);
      classificacoes.push(c);
    }
    return classificacoes;
  }

  ionViewDidLoad() {
    this.getClassificacao();
  }

}
