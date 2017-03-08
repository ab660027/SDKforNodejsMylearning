import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

import { Dto } from '../dto';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [SearchService]
})
export class TableComponent implements OnInit {
  public datas: Dto[];
  private errorMessage: string;

  constructor(private searchService: SearchService) { }

  ngOnInit() { this.getData(); }

  getData() {
    this.datas = this.searchService.getData();
    console.log(this.datas);
  }

}
