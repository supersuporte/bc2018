import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Classificacao } from '../../models/classificacao';

@Injectable()
export class ClassificacaoWsProvider {

  constructor(public http: Http) {
    console.log('Hello ClassificacaoWsProvider Provider');
  }

  public getClassificacao():any {
    return this.http.get('https://randomuser.me/api/?results=10');
  }

}
