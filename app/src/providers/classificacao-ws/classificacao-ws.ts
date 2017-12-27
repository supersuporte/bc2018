import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ClassificacaoWsProvider {

  url = 'classificacao.json';

  constructor(public http: Http) {
    console.log('Hello ClassificacaoWsProvider Provider');
  }

  public getClassificacaoFromWS(): Observable<Response> {
    console.log(this.url);
    return this.http.get(this.url);
  }

}
