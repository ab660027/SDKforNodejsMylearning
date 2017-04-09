import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class AjaxService {

  constructor( private _http: Http ) {
  }

  test( method: string ): Observable<any> {
    const url = '';
    switch ( method ) {
      case 'GET': return this._http.get( url ).map( res => res.json() );
      case 'POST': return this._http.post( url, {}).map( res => res.json() );
      case 'PUT': return this._http.put( url, {}).map( res => res.json() );
      case 'DELETE': return this._http.delete( '' ).map( res => res.json() );
      default: return this._http.head( url );
    }
  }
}
