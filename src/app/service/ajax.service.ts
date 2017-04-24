import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestMethod, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class AjaxService {
  private debug: boolean = false;
  private endpoint: string = this.debug && 'http://localhost:9080/api' || '/api';
  private cookie: RequestOptions = new RequestOptions({ "withCredentials": true });

  constructor( private _http: Http ) { }

  login() {
    return this._http.get( this.endpoint + '/login', this.cookie );
  }

  getPush( delayTime: number = 0 ) {
    return this._http.get( this.endpoint + '/push?delay=' + delayTime, this.cookie ).map( res => res.json() );
  }
}
