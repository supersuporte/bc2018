import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Utils } from '../../services/utils';
import { JogosWsProvider } from '../../providers/jogos-ws/jogos-ws';
import { Jogo } from '../../models/jogo';
import { Fase } from '../../models/fase';
import { Cidade } from '../../models/cidade';
import { Adversario } from '../../models/adversario';
import { Equipe } from '../../models/equipe';

@IonicPage()
@Component({
  selector: 'page-jogos',
  templateUrl: 'jogos.html',
  providers: [JogosWsProvider]
})
export class JogosPage {

  private jogos = new Array<Jogo>();
  private utils = new Utils();
  private jogoAnterior = new Jogo();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private jogosWsProvider: JogosWsProvider) {
  }

  private loadJogos(): void {
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
      jogo.setData(js.data);
      jogo.setDia(js.dia);
      jogo.setHora(js.hora);
      jogo.setPontos(js.pontos);

      let fase = new Fase();
      fase.setCodigo(js.fase.codigo);
      fase.setDescricao(js.fase.descricao);
      jogo.setFase(fase);

      let cidade = new Cidade();
      cidade.setCodigo(js.cidade.codigo);
      cidade.setDescricao(js.cidade.descricao);
      jogo.setCidade(cidade);

      let equipe = new Equipe();
      equipe.setCodigo(js.adversario1.equipe.codigo);
      equipe.setDescricao(js.adversario1.equipe.descricao);

      let adversario = new Adversario();
      adversario.setEquipe(equipe);
      adversario.setGols(js.adversario1.gols);
      adversario.setPalpite(js.adversario1.palpite);
      jogo.setAdversario1(adversario);

      equipe = new Equipe();
      equipe.setCodigo(js.adversario2.equipe.codigo);
      equipe.setDescricao(js.adversario2.equipe.descricao);

      adversario = new Adversario();
      adversario.setEquipe(equipe);
      adversario.setGols(js.adversario2.gols);
      adversario.setPalpite(js.adversario2.palpite);
      jogo.setAdversario2(adversario);

      jogos.push(jogo);
    }
    return jogos;
  }

  public getFlag(equipe: Equipe): string {
    return this.utils.getFlag(equipe);
  }

  public isFaseRendered(jogo: Jogo, jogoAnterior: Jogo): boolean {
    if (jogoAnterior.getData() != null) {
      return jogo.getFase().getCodigo() == jogoAnterior.getFase().getCodigo() ? false : true;
    } else {
      return true;
    }
  }

  public isDataRendered(jogo: Jogo, jogoAnterior: Jogo): boolean {
    if (jogoAnterior.getData() != null) {
      return jogo.getData() == jogoAnterior.getData() ? false : true;
    } else {
      return true;
    }
  }

  public getBorderClass(jogo: Jogo, jogoAnterior: Jogo): string {
    return this.isDataRendered(jogo, jogoAnterior) ? "" : "border";
  }

  public getJogos(): Array<Jogo> {
    return this.jogos;
  }

  public getJogoAnterior(): Jogo {
    return this.jogoAnterior;
  }

  public setJogoAnterior(jogoAnterior: Jogo): void {
    this.jogoAnterior = jogoAnterior;
  }

  ionViewDidLoad() {
    this.loadJogos();
  }

}
