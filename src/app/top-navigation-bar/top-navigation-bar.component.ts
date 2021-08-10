import {Component, OnInit} from '@angular/core';
import {TabInfo, TABS} from "./tab-info";

@Component({
  selector: 'app-top-navigation-bar',
  templateUrl: './top-navigation-bar.component.html',
  styleUrls: ['./top-navigation-bar.component.scss']
})
export class TopNavigationBarComponent implements OnInit {

  tabs: TabInfo[] = TABS

  constructor() {
  }

  ngOnInit(): void {
  }


}
