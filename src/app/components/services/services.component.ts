import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services: any[] = [
    {
      class: 'fa-solid fa-code',
      title: 'Web Design',
      body: 'Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.'
    },
    {
      class: 'fa-brands fa-app-store',
      title: 'App Design',
      body: 'App development is a dynamic and creative process that involves designing, coding, testing, and deploying applications for mobile devices.'
    },
    {
      class: 'fa-solid fa-crop',
      title: 'Graphic Design',
      body: 'Graphic design is the art of creating visual content to communicate a message. It involves using typography, imagery, color, and layout to design logos, posters, websites.'
    }
  ]
}
