import { Fase } from './fase';
import { Cidade } from './cidade';
import { Adversario } from './adversario';

export class Jogo {

  private fase: Fase;
  private data: string;
  private dia: string;
  private hora: string;
  private cidade: Cidade;
  private adversario1: Adversario;
  private adversario2: Adversario;
  private pontos: number;

  public getFase(): Fase {
    return this.fase;
  }

  public setFase(fase: Fase): void {
    this.fase = fase;
  }

  public getData(): string {
    return this.data;
  }

  public setData(data: string): void {
    this.data = data;
  }

  public getDia(): string {
    return this.dia;
  }

  public setDia(dia: string): void {
    this.dia = dia;
  }

  public getHora(): string {
    return this.hora;
  }

  public setHora(hora: string): void {
    this.hora = hora;
  }

  public getCidade(): Cidade {
    return this.cidade;
  }

  public setCidade(cidade: Cidade): void {
    this.cidade = cidade;
  }

  public getAdversario1(): Adversario {
    return this.adversario1;
  }

  public setAdversario1(adversario: Adversario): void {
    this.adversario1 = adversario;
  }

  public getAdversario2(): Adversario {
    return this.adversario2;
  }

  public setAdversario2(adversario: Adversario): void {
    this.adversario2 = adversario;
  }

  public getPontos(): number {
    return this.pontos;
  }

  public setPontos(pontos: number): void {
    this.pontos = pontos;
  }

}
