import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const APP_URL = "https://sba-dev.vercel.app";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'SBA - Home Page',
      metaTags: [
        { name: 'description', content: 'I\'m Saad Bin Ayyaz, a passionate and skilled Fullstack Developer. Discover my portfolio, services, and expertise in web development.' },
        { name: 'keywords', content: 'Saad Bin Ayyaz, Software Engineer, Fullstack Developer, Wordpress Developer, Front-end Developer, Backend Developer, Shopify Developer, Angular Developer, React Developer, web applications, efficient web development' },
        { property: 'og:title', content: 'Home Page - SBA Portfolio' },
        { property: 'og:description', content: 'Explore the home page of Saad Bin Ayyaz\'s portfolio. Discover my services and expertise in web development.' },
        { property: 'og:image', content: `${APP_URL}/assets/Logos/main-img.png` },
        { property: 'og:url', content: `${APP_URL}/home` },
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:site', content: 'SBA-Portfolio' },
        { property: 'twitter:image', content: `${APP_URL}/assets/Logos/main-img.png` }
      ],
      canonicalUrl: `${APP_URL}/home`
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'SBA - About',
      metaTags: [
        { name: 'description', content: 'Learn about Saad Bin Ayyaz, a skilled Fullstack Developer specializing in web applications and efficient web development.' },
        { name: 'keywords', content: 'Saad Bin Ayyaz, Software Engineer, Fullstack Developer, Wordpress Developer, Front-end Developer, Backend Developer, Shopify Developer, Angular Developer, React Developer, web development, efficient web applications' },
        { property: 'og:title', content: 'About - SBA Portfolio' },
        { property: 'og:description', content: 'Discover Saad Bin Ayyaz\'s background and expertise in web development. Learn about my skills in creating efficient web applications.' },
        { property: 'og:image', content: `${APP_URL}/assets/Logos/main-img.png` },
        { property: 'og:url', content: `${APP_URL}/about` },
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:site', content: 'SBA-Portfolio' },
        { property: 'twitter:image', content: `${APP_URL}/assets/Logos/main-img.png` }
      ],
      canonicalUrl: `${APP_URL}/about`
    }
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: {
      title: 'SBA - Services',
      metaTags: [
        { name: 'description', content: 'Explore the services offered by Saad Bin Ayyaz, including web development, Wordpress customization, and Shopify store setup.' },
        { name: 'keywords', content: 'Saad Bin Ayyaz, Software Engineer, Fullstack Developer, Wordpress Developer, Front-end Developer, Backend Developer, Shopify Developer, Angular Developer, React Developer, web development services, Wordpress customization, Shopify setup' },
        { property: 'og:title', content: 'Services - SBA Portfolio' },
        { property: 'og:description', content: 'Explore the services offered by Saad Bin Ayyaz, including web development, Wordpress customization, and Shopify store setup.' },
        { property: 'og:image', content: `${APP_URL}/assets/Logos/main-img.png` },
        { property: 'og:url', content: `${APP_URL}/services` },
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:site', content: 'SBA-Portfolio' },
        { property: 'twitter:image', content: `${APP_URL}/assets/Logos/main-img.png` }
      ],
      canonicalUrl: `${APP_URL}/services`
    }
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: {
      title: 'SBA - Portfolio',
      metaTags: [
        { name: 'description', content: 'View the portfolio of Saad Bin Ayyaz, showcasing web development projects, Wordpress customizations, and Shopify store designs.' },
        { name: 'keywords', content: 'Saad Bin Ayyaz, Software Engineer, Fullstack Developer, Wordpress Developer, Front-end Developer, Backend Developer, Shopify Developer, Angular Developer, React Developer, web development portfolio, Wordpress projects, Shopify designs' },
        { property: 'og:title', content: 'Portfolio - SBA Portfolio' },
        { property: 'og:description', content: 'Explore Saad Bin Ayyaz\'s portfolio, showcasing web development projects, Wordpress customizations, and Shopify store designs.' },
        { property: 'og:image', content: `${APP_URL}/assets/Logos/main-img.png` },
        { property: 'og:url', content: `${APP_URL}/portfolio` },
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:site', content: 'SBA-Portfolio' },
        { property: 'twitter:image', content: `${APP_URL}/assets/Logos/main-img.png` }
      ],
      canonicalUrl: `${APP_URL}/portfolio`
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'SBA - Contact',
      metaTags: [
        { name: 'description', content: 'Contact Saad Bin Ayyaz for web development services. Get in touch to discuss your project needs and how I can assist.' },
        { name: 'keywords', content: 'Saad Bin Ayyaz, Software Engineer, Fullstack Developer, Wordpress Developer, Front-end Developer, Backend Developer, Shopify Developer, Angular Developer, React Developer, web development services, project consultation' },
        { property: 'og:title', content: 'Contact - SBA Portfolio' },
        { property: 'og:description', content: 'Contact Saad Bin Ayyaz for web development services. Get in touch to discuss your project needs and how I can assist.' },
        { property: 'og:image', content: `${APP_URL}/assets/Logos/main-img.png` },
        { property: 'og:url', content: `${APP_URL}/contact` },
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:site', content: 'SBA-Portfolio' },
        { property: 'twitter:image', content: `${APP_URL}/assets/Logos/main-img.png` }
      ],
      canonicalUrl: `${APP_URL}/contact`
    }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
