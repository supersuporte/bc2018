export class Classificacao {

  private posicao: number;
  private nome: string;
  private pontos: number;

  public getPosicao(): number {
    return this.posicao;
  }

  public setPosicao(posicao: number): void {
    this.posicao = posicao;
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public getPontos(): number {
    return this.pontos;
  }

  public setPontos(pontos: number): void {
    this.pontos = pontos;
  }
}
