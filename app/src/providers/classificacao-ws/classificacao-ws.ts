import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

import { Classificacao } from '../../models/classificacao';

@Injectable()
export class ClassificacaoWsProvider {

  url = 'https://api.themoviedb.org/3/movie/popular?page=1&api_key=51e4e9d52532d389174b5252cd99d33d';

  constructor(public http: Http) {
    console.log('Hello ClassificacaoWsProvider Provider');
  }

  public getClassificacaoFromWS(): Observable<Response> {
    return this.http.get(this.url);
  }

}
