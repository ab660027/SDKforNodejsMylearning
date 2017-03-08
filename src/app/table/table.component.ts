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
  public datas: Dto[];

  constructor(private searchService: SearchService) { }

  ngOnInit() { this.getData(); }

  getData() {
    this.searchService.getData().subscribe((val: Dto[]) => this.datas = val, (err: any) => console.log(err), () => console.log(this.datas));
  }

}
