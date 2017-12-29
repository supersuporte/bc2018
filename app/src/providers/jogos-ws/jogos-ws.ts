import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class JogosWsProvider {

  url = 'jogos.json';

  constructor(public http: Http) {
    console.log('Hello JogosWsProvider Provider');
  }

  public getJogosFromWS(): Observable<Response> {
    return this.http.get(this.url);
  }

}
