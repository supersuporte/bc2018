import { Component } from '@angular/core';

import { ClassificacaoPage } from '../classificacao/classificacao';
import { JogosPage } from '../jogos/jogos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ClassificacaoPage;
  tab2Root = JogosPage;

  constructor() {

  }
}
