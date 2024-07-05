import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services: any[] = [
    {
      class: 'fas fa-code',
      title: 'Web Design',
      body: 'Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be as fast as possible.',
      link: 'https://www.google.com/search?q=Learn+about+Web+Design'
    },
    {
      class: 'fab fa-app-store',
      title: 'App Design',
      body: 'App development is a dynamic and creative process that involves designing, coding, testing, and deploying applications for mobile devices.',
      link: 'https://www.google.com/search?q=Learn+about+App+Design'
    },
    {
      class: 'fas fa-crop',
      title: 'Graphic Design',
      body: 'Graphic design is the art of creating visual content to communicate a message. It involves using typography, imagery, color, and layout to design logos, posters, websites.',
      link: 'https://www.google.com/search?q=Learn+about+Graphic+Design'
    },
    {
      class: 'fas fa-laptop-code',
      title: 'Frontend Development',
      body: 'Expert in building responsive and fast frontend applications using technologies like React, Angular, Vue.js, Bootstrap, TailwindCSS, and Material UI (MUI).',
      link: 'https://www.google.com/search?q=Learn+about+Frontend+Development'
    },
    {
      class: 'fas fa-server',
      title: 'Backend Development',
      body: 'Proficient in developing robust server-side applications with Node.js, Express.js, NestJS, MongoDB, MySQL, Microsoft SQL Server, and integrating with Firebase and AWS.',
      link: 'https://www.google.com/search?q=Learn+about+Backend+Development'
    },
    {
      class: 'fas fa-tools',
      title: 'Tooling & DevOps',
      body: 'Skilled in using Git, GitHub, NPM, ESLint for code quality, Jira for project management, Postman for API testing, deploying applications on Heroku, Netlify, Vercel, and managing CI/CD pipelines.',
      link: 'https://www.google.com/search?q=Learn+about+Tooling+and+DevOps'
    },
    {
      class: 'fas fa-palette',
      title: 'UI/UX Design',
      body: 'Experienced in creating intuitive and visually appealing designs using Adobe Photoshop, Figma, Adobe Fonts, Canva, and implementing design systems.',
      link: 'https://www.google.com/search?q=Learn+about+UI+UX+Design'
    },
    {
      class: 'fas fa-database',
      title: 'Database Management',
      body: 'Proficiency in database management with Firebase, MongoDB, MySQL, Microsoft SQL Server, ensuring efficient data storage and retrieval.',
      link: 'https://www.google.com/search?q=Learn+about+Database+Management'
    }
  ]


}
