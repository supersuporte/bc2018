import { Fase } from './fase';

export class Jogo {

  private fase: Fase;

  public getFase(): Fase {
    return this.fase;
  }

  public setFase(fase: Fase): void {
    this.fase = fase;
  }

}
