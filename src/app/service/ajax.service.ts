import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestMethod, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class AjaxService {
  private endpoint: string = 'http://localhost:9080/api';

  constructor( private _http: Http ) { }

  login() {
    return this._http.get( this.endpoint + '/login' );
  }

  getPush( delayTime: number = 0 ) {
    return this._http.get( this.endpoint + '/push?delay=' + delayTime ).map( res => res.json() );
  }
}
