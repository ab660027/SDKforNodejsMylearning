import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public navItem: Array<navItem> = [{ navName:'top', navPath:'', select: true },
                                    { navName:'test2', navPath:'path2', select: false },
                                    { navName:'test3', navPath:'path3', select: false },
                                    { navName:'test4', navPath:'path4', select: false },
                                    { navName:'test5', navPath:'path5', select: false }];

  constructor() { }

  ngOnInit() { }
  
  onClick(select: navItem) {
    this.navItem.forEach(item => {
      item.select = item === select;
    })
  }

}

interface navItem {
  navName: string;
  navPath: string;
  select: boolean;
}