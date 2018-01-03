export class Equipe {

  private codigo: number;
  private descricao: string;

  public getCodigo(): number {
    return this.codigo;
  }

  public setCodigo(codigo: number): void {
    this.codigo = codigo;
  }

  public getDescricao(): string {
    return this.descricao;
  }

  public setDescricao(descricao: string): void {
    this.descricao = descricao;
  }

}
