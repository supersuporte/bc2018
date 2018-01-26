import { Utils } from '../services/utils';
import { Jogo } from '../models/jogo';
import { Fase } from '../models/fase';
import { Cidade } from '../models/cidade';
import { Equipe } from '../models/equipe';
import { Adversario } from '../models/adversario';

export class JogoService {

  private utils = new Utils();

  public isJogoEmAndamento(jogo: Jogo): boolean {
    let hoje = this.utils.getHoje();
    let dataDoJogo = this.utils.getDataCompleta(jogo);

    if (hoje >= dataDoJogo && jogo.getPontos() == null) {
      return true;
    } else {
      return false;
    }
  }

  public isJogoEncerrado(jogo: Jogo): boolean {
    if (jogo.getPontos() != null) {
      return true;
    } else {
      return false;
    }
  }

  public parseJsonToObj(json: any): Array<Jogo> {
    let jogos = new Array<Jogo>();
    for (let js of json) {
      let jogo = new Jogo();
      jogo.setData(js.data);
      jogo.setDia(js.dia);
      jogo.setHora(js.hora);
      jogo.setPontos(js.pontos);

      let fase = new Fase();
      fase.setCodigo(js.fase.codigo);
      fase.setDescricao(js.fase.descricao);
      jogo.setFase(fase);

      let cidade = new Cidade();
      cidade.setCodigo(js.cidade.codigo);
      cidade.setDescricao(js.cidade.descricao);
      jogo.setCidade(cidade);

      let equipe = new Equipe();
      equipe.setCodigo(js.adversario1.equipe.codigo);
      equipe.setDescricao(js.adversario1.equipe.descricao);

      let adversario = new Adversario();
      adversario.setEquipe(equipe);
      adversario.setGols(js.adversario1.gols);
      adversario.setPalpite(js.adversario1.palpite);
      jogo.setAdversario1(adversario);

      equipe = new Equipe();
      equipe.setCodigo(js.adversario2.equipe.codigo);
      equipe.setDescricao(js.adversario2.equipe.descricao);

      adversario = new Adversario();
      adversario.setEquipe(equipe);
      adversario.setGols(js.adversario2.gols);
      adversario.setPalpite(js.adversario2.palpite);
      jogo.setAdversario2(adversario);

      jogos.push(jogo);
    }
    return jogos;
  }
}
