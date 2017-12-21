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
    let indice = 1;
    for (let j of json) {
      let c = new Classificacao();
      c.setNome(j.original_title);
      c.setPosicao(indice);
      c.setPontos(400-(indice*10));
      classificacoes.push(c);
      indice++;
    }
    return classificacoes;
  }

  public getClasseDestaque(classificacao: Classificacao): string {
    if (classificacao.getPosicao() <= 3) {
      return "ion-note-destaque";
    } else {
      return "ion-note-destaque-default";
    }
  }

  ionViewDidLoad() {
    this.getClassificacao();
  }

}
