import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'SBA - Home Page',
      metaTags: [
        { name: 'description', content: 'Welcome to our home page. Learn more about our services.' },
        { name: 'keywords', content: 'home, services, angular' },
        { property: 'og:title', content: 'Home Page - SBA Portfolio' },
        { property: 'og:description', content: 'Learn more about our services at Your Angular App.' },
        { property: 'og:image', content: 'http://localhost:4200/assets/Logos/main-img.png' },
        { property: 'og:url', content: 'http://localhost:4200/home' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:site', content: 'SBA-Portfolio' },
        { property: 'twitter:image', content: 'http://localhost:4200/assets/Logos/main-img.png' }
      ],
      canonicalUrl: 'http://localhost:4200/home'
    }
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'contact',
    component: ContactComponent
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
