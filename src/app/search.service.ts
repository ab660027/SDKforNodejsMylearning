import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Dto } from './dto';

@Injectable()
export class SearchService {
  private url = 'http://localhost:9080/database/search';
  private dto: Observable<Dto[]>;

  constructor(private _http: Http) {
  }

  getData(): Observable<Dto[]> {
    return this._http.get(this.url).map(res => res.json());
  }
}
