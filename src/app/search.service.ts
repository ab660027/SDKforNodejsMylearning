import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Request, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Dto } from './dto';

@Injectable()
export class SearchService {
  private url = 'http://localhost:9080/database/search';
  private res: Dto[];

  constructor(private http: Http) {
  }

  getData() {
    this.http.get(this.url)
      .map(res => res.json())
      .subscribe(res => this.res = res);
    console.log("qqqq");
    console.log(this.res);
    return this.res;
  }
}
