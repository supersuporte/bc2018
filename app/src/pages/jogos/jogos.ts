import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { JogosWsProvider } from '../../providers/jogos-ws/jogos-ws';
import { PalpitePage } from '../../pages/palpite/palpite';
import { Utils } from '../../services/utils';
import { JogoService } from '../../services/jogo-service';
import { Jogo } from '../../models/jogo';
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
  private jogoService = new JogoService();
  private jogoAnterior = new Jogo();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private jogosWsProvider: JogosWsProvider) {
  }

  public showModalPalpite(jogo: Jogo): void {
    let modal = this.modalCtrl.create(PalpitePage, jogo);
    modal.present();
  }

  private loadJogos(): void {
    this.jogosWsProvider.getJogosFromWS().subscribe (
      data => {
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          this.jogos = this.jogoService.parseJsonToObj(objeto_retorno.results);
      }, error => {
          console.log(error);
      }
    )
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

  public isPalpiteRendered(jogo: Jogo): boolean {
    return jogo.getAdversario1().getPalpite() == null ? false : true;
  }

  public isPontosRendered(jogo: Jogo): boolean {
    return jogo.getPontos() == null ? false : true;
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
