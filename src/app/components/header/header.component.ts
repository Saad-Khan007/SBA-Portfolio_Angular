import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  sideMenu: boolean = false
  menu() {
    this.sideMenu = !this.sideMenu
  }
}
