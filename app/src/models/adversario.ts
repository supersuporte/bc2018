import { Equipe } from './equipe';

export class Adversario {

  private equipe: Equipe;
  private gols: number;
  private palpite: number;

  public getEquipe(): Equipe {
    return this.equipe;
  }

  public setEquipe(equipe: Equipe): void {
    this.equipe = equipe;
  }

  public getGols(): number {
    return this.gols;
  }

  public setGols(gols: number): void {
    this.gols = gols;
  }

  public getPalpite(): number {
    return this.palpite;
  }

  public setPalpite(palpite: number): void {
    this.palpite = palpite;
  }

}
