export class Classificacao {

  private posicao: number;
  private nome: string;

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
}
