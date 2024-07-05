import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

interface MetaTag {
  name?: string;
  property?: string;
  content: string;
}

interface RouteData {
  title: string;
  metaTags?: MetaTag[];
  canonicalUrl?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterImage?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      switchMap(route => route.data as Observable<RouteData>)
    ).subscribe((data: RouteData) => {
      if (data.title) {
        this.titleService.setTitle(data.title);
      }

      this.updateMetaTags(data.metaTags);

      if (data.canonicalUrl && isPlatformBrowser(this.platformId)) {
        this.updateCanonicalUrl(data.canonicalUrl);
      } else if (isPlatformBrowser(this.platformId)) {
        this.removeCanonicalUrl();
      }

      if (data.ogImage && isPlatformBrowser(this.platformId)) {
        this.updateMetaTag('og:image', data.ogImage);
      }
      if (data.ogUrl && isPlatformBrowser(this.platformId)) {
        this.updateMetaTag('og:url', data.ogUrl);
      }

      if (data.twitterCard && data.twitterSite && isPlatformBrowser(this.platformId)) {
        this.updateMetaTag('twitter:card', data.twitterCard);
        this.updateMetaTag('twitter:site', data.twitterSite);
      }
      if (data.twitterImage && isPlatformBrowser(this.platformId)) {
        console.log(data.twitterImage);
        this.updateMetaTag('twitter:image', data.twitterImage);
      }
    });
  }

  private updateMetaTags(metaTags: MetaTag[] = []): void {
    this.metaService.removeTag('name="description"');
    this.metaService.removeTag('name="keywords"');
    this.metaService.removeTag('property="og:title"');
    this.metaService.removeTag('property="og:description"');
    this.metaService.removeTag('property="og:image"');
    this.metaService.removeTag('property="og:url"');
    this.metaService.removeTag('name="twitter:card"');
    this.metaService.removeTag('name="twitter:site"');
    this.metaService.removeTag('name="twitter:image"');

    metaTags.forEach(tag => {
      if (tag.name) {
        this.metaService.addTag({ name: tag.name, content: tag.content });
      } else if (tag.property) {
        this.metaService.addTag({ property: tag.property, content: tag.content });
      }
    });
  }

  private updateCanonicalUrl(url: string): void {
    if (isPlatformBrowser(this.platformId)) {
      let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (link) {
        link.setAttribute('href', url);
      } else {
        link = document.createElement('link') as HTMLLinkElement;
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', url);
        document.head.appendChild(link);
      }
    }
  }

  private removeCanonicalUrl(): void {
    if (isPlatformBrowser(this.platformId)) {
      let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (link) {
        document.head.removeChild(link);
      }
    }
  }

  private updateMetaTag(tagName: string, content: string): void {
    this.metaService.removeTag(`${tagName}`);
    this.metaService.addTag({ property: tagName, content: content });
  }
}
