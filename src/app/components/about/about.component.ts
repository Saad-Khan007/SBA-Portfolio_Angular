import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  tabMenu: any[] = [true, false, false]
  activeTab: number = 0
  tab(n: number) {
    for (let i = 0; i < 3; i++) {
      this.tabMenu[i] = false;
    }
    this.tabMenu[n] = true;
    this.activeTab = n;
  }
}
