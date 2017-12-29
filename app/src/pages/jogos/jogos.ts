import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JogosWsProvider } from '../../providers/jogos-ws/jogos-ws';
import { Jogo } from '../../models/jogo';
import { Fase } from '../../models/fase';

@IonicPage()
@Component({
  selector: 'page-jogos',
  templateUrl: 'jogos.html',
  providers: [JogosWsProvider]
})
export class JogosPage {

  public jogos = new Array<Jogo>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private jogosWsProvider: JogosWsProvider) {
  }

  private getJogos(): void {
    this.jogosWsProvider.getJogosFromWS().subscribe (
      data => {
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          this.jogos = this.parseJsonToObj(objeto_retorno.results);
      }, error => {
          console.log(error);
      }
    )
  }

  private parseJsonToObj(json: any): Array<Jogo> {
    let jogos = new Array<Jogo>();
    for (let js of json) {
      let jogo = new Jogo();
      let fase = new Fase();
      fase.setCodigo(js.fase.codigo);
      fase.setDescricao(js.fase.descricao);
      jogo.setFase(fase);

      jogos.push(jogo);
    }
    return jogos;
  }

  ionViewDidLoad() {
    this.getJogos();
  }

}
