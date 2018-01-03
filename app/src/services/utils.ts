import { Equipe } from '../models/equipe';

export class Utils {

  public getFlag(equipe: Equipe): string {
    let flag = "../../assets/flags/";
    flag += equipe.getDescricao().replace(/ /g, '').toLowerCase();
    flag += ".png";
    return flag;
  }
}
