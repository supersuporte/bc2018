import { AlertController, Alert } from 'ionic-angular';

export class PalpiteValidator {

  public isPalpiteValido(palpite01: number, palpite02: number): boolean {
    return palpite01 != null && palpite02 != null ? true : false;
  }

  public alertaPalpiteInvalido(alertCtrl: AlertController): Alert {
    let alert = alertCtrl.create({
      title: 'Opa amigo(a)!',
      subTitle: 'Seu palpite deve ser de 0 a 9!',
      buttons: ['Ah tá, entendi']
    });
    return alert;
  }

}
