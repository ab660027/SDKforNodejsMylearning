import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { HttpModule } from '@angular/http';

import { Dto } from '../dto';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [SearchService]
})
export class TableComponent implements OnInit {
  public per: number;
  public page: number;
  public pager: (string | number)[];
  public datas: Dto[];

  constructor(private searchService: SearchService) {
    this.per = 5;
    this.page = 1;
    this.pager = [1, 2, 3, 4, 5, 6, '>'];
  }

  ngOnInit() { this.getData(); }

  getData() {
    this.searchService.getData().subscribe((val: Dto[]) => this.datas = val, (err: any) => console.log(err), () => console.log(this.datas));
  }

  onClick(page: string | number) {
    if (page === '<' && this.page > 1) {
      this.page--;
      if (this.page >= 3) {
        for (let i = 0; i < 7; i++) {
          //          typeof this.pager[i] === 'number' ? 
        }
      }
    }
    if (page === '>' && this.page * this.per < this.datas.length) {
      this.page++;
    }
    if (typeof page === 'number') {
      this.page = page;
    }
    this.pager = [];
    if (page > 1) {
      this.pager.push('<');
    }
    for (var i = this.page - 7; this.pager.length < 7; i++) {
      if (i < 1) {
        continue;
      }
      this.pager.push(i);
    }
  }
}
