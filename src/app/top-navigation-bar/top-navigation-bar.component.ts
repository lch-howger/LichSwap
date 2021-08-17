import {Component, OnInit} from '@angular/core';
import {TabInfo, TABS} from "./tab-info";

@Component({
  selector: 'app-top-navigation-bar',
  templateUrl: './top-navigation-bar.component.html',
  styleUrls: ['./top-navigation-bar.component.scss']
})
export class TopNavigationBarComponent implements OnInit {

  tabs: TabInfo[] = TABS
  nowIndex = 0
  nowPage = this.tabs[0]

  constructor() {
  }

  ngOnInit(): void {
  }


}
