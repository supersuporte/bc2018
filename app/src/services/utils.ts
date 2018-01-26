import { Equipe } from '../models/equipe';
import { Jogo } from '../models/jogo';

export class Utils {

  public getHoje(): string {
    let data = new Date(2018, 5, 15, 21, 0);
    let ano = data.getFullYear().toString();
    let mes = (data.getMonth()+1).toString();
    let dia = data.getDate().toString();
    let hora = data.getHours().toString();
    let minuto = data.getMinutes().toString();

    if (mes.length == 1) {mes = "0" + mes;}
    if (dia.length == 1) {dia = "0" + dia;}
    if (hora.length == 1) {hora = "0" + hora;}
    if (minuto.length == 1) {minuto = "0" + minuto;}

    return ano + mes + dia + hora + minuto;
  }

  public getDataCompleta(jogo: Jogo): string {
    let data = new Date();
    let ano = data.getFullYear().toString();
    let mes = jogo.getData().substr(3, 2);
    let dia = jogo.getData().substr(0, 2);
    let hora = jogo.getHora().substr(0, 2);
    let minuto = jogo.getHora().substr(3, 2);

    return ano + mes + dia + hora + minuto;
  }

  public getFlag(equipe: Equipe): string {
    let flag = "../../assets/flags/";
    flag += equipe.getDescricao().replace(/ /g, '').toLowerCase();
    flag += ".png";
    return flag;
  }
}
