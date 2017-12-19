import { Component } from '@angular/core';

import { ClassificacaoPage } from '../classificacao/classificacao';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ClassificacaoPage;

  constructor() {

  }
}
