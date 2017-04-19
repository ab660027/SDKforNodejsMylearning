import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestMethod, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class AjaxService {
  private endpoint: string = 'http://localhost:9080/api';
  
  constructor( private _http: Http ) {
  }

  test( method: string ): Observable<any> {
    const url = '';
    let METHOD: RequestMethod;
    switch ( method ) {
      case 'GET': METHOD = RequestMethod.Get; break;
      case 'POST': METHOD = RequestMethod.Post; break;
      case 'PUT': METHOD = RequestMethod.Put; break;
      case 'DELETE': METHOD = RequestMethod.Delete; break;
      default: METHOD = RequestMethod.Head; break;
    }
    const requestOptions = new RequestOptions({ headers: new Headers({ 'Method': METHOD }) });
    return this._http.request(url, requestOptions).map( res => res.json() );
  }
  
  login() {
    return this._http.get(this.endpoint + '/login');    
  }

  getPush(delayTime: number = 0) {
    return this._http.get(this.endpoint + '/push?delay=' + delayTime).map( res => res.json() );
  }
}
