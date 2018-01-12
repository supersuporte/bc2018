import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Utils } from '../../services/utils';
import { Jogo } from '../../models/jogo';
import { Equipe } from '../../models/equipe';
import { Adversario } from '../../models/adversario';

@IonicPage()
@Component({
  selector: 'page-palpite',
  templateUrl: 'palpite.html',
})
export class PalpitePage {

  public jogo = new Jogo();
  private utils = new Utils();
  private palpite01 = 0;
  private palpite02 = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {
      this.jogo = this.navParams.get('jogoSelecionado');
      this.setPalpite01(this.jogo.getAdversario1().getPalpite());
      this.setPalpite02(this.jogo.getAdversario2().getPalpite());
  }

  public getFlag(equipe: Equipe): string {
    return this.utils.getFlag(equipe);
  }

  public addGol(adversario: Adversario): void {
    if (adversario.getEquipe() == this.jogo.getAdversario1().getEquipe()) {
      if (this.palpite01 < 9) {
        this.palpite01 = this.palpite01+1;
      }
    } else {
      if (this.palpite02 < 9) {
        this.palpite02 = this.palpite02+1;
      }
    }
  }

  public removeGol(adversario: Adversario): void {
    if (adversario.getEquipe() == this.jogo.getAdversario1().getEquipe()) {
      if (this.palpite01 > 0) {
        this.palpite01 = this.palpite01-1;
      }
    } else {
      if (this.palpite02 > 0) {
        this.palpite02 = this.palpite02-1;
      }
    }
  }


  public getPalpite01(): number {
    return this.palpite01;
  }

  public setPalpite01(palpite01: number): void {
    this.palpite01 = palpite01;
  }

  public getPalpite02(): number {
    return this.palpite02;
  }

  public setPalpite02(palpite02: number): void {
    this.palpite02 = palpite02;
  }

  public dismiss(): void {
    this.viewCtrl.dismiss();
  }

}
