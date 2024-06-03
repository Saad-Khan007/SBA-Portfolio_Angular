import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  tabMenu: any[] = [true, false, false]
  activeTab: number = 0
  skills = [
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'Angular', percentage: 70 },
    { name: 'React JS', percentage: 50 },
    { name: 'Laravel', percentage: 30 },
    { name: 'Express JS', percentage: 60 },
    { name: 'Photoshop', percentage: 40 },
    { name: 'Figma', percentage: 30 },
    { name: 'MEAN Stack', percentage: 80 },
    { name: 'MERN Stack', percentage: 60 },
    { name: 'MySQL', percentage: 90 },
    { name: 'Mongo DB', percentage: 90 },
    { name: 'Firebase', percentage: 40 },
    { name: 'Ms Office', percentage: 50 },
    { name: 'Wordpress', percentage: 70 },
    { name: 'Shopify', percentage: 80 },
    { name: 'Git & Github', percentage: 80 },
  ];

  tab(n: number) {
    for (let i = 0; i < 3; i++) {
      this.tabMenu[i] = false;
    }
    this.tabMenu[n] = true;
    this.activeTab = n;
  }
}
