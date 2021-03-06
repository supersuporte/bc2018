import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, Content } from 'ionic-angular';
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
  @ViewChild(Content) content: Content;

  private jogos = new Array<Jogo>();
  private utils = new Utils();
  private jogoService = new JogoService();
  private jogoAnterior = new Jogo();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    private jogosWsProvider: JogosWsProvider) {
  }

  public sc(elemento: string) {
    let yOffset = document.getElementById(elemento).offsetTop;
    this.content.scrollTo(0, yOffset, 4000);
    console.log(">>>>>>>>>>>>>>>>>>>>>" + yOffset);
  }

  public showModalPalpite(jogo: Jogo): void {
    if (this.jogoService.isJogoEmAndamento(jogo)) {
      let alert = this.alertCtrl.create({
        title: 'Jogo em Andamento!',
        subTitle: 'Fique na torcida por seu palpite!',
        buttons: ['OK']
      });
      alert.present();

    } else if (this.jogoService.isJogoEncerrado(jogo)) {
      let alert = this.alertCtrl.create({
        title: 'Fim de Jogo!',
        subTitle: 'Você marcou ' + jogo.getPontos() + ' pontos neste confronto!',
        buttons: ['OK']
      });
      alert.present();

    } else {
      let modal = this.modalCtrl.create(PalpitePage, {jogoSelecionado: jogo});
      modal.present();
    }
  }

  private loadJogos(refresher: any): void {
    this.jogosWsProvider.getJogosFromWS().subscribe (
      data => {
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          this.jogos = this.jogoService.parseJsonToObj(objeto_retorno.results);
          if (refresher != null) {
            refresher.complete();
          }
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

  public isJogoEmAndamento(jogo: Jogo): boolean {
    return this.jogoService.isJogoEmAndamento(jogo);
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
    this.loadJogos(null);
  }

  doRefresh(refresher) {
    this.loadJogos(refresher);
  }

}
