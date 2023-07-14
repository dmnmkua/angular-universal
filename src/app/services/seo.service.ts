import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface ISeoConfig {
  title?: string;
  description?: string;
  image?: string;
  slug?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  title = inject(Title);
  meta = inject(Meta);

  setTitle(title: string) {
    this.title.setTitle(title);
  }

  setMetaTags(config: ISeoConfig | any = {}) {
    config = { 
      title: 'title',
      description: 'description',
      image: 'https://base64.ai/static/media-kit/base64.ai-logo-small.png',
      slug: 'test',
      ...config
    }

    this.meta.updateTag({ name: 'description', content: config.description });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: '@dmn1024' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.image });

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'dmn1024' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: config.image });
    this.meta.updateTag({ property: 'og:url', content: `https://test.gg${config.slug}` });
  }

  removeMetaTags() {
    this.meta.removeTag('name="description"');
    this.meta.removeTag('property="og:title"');
    this.meta.removeTag('property="og:description"');
    this.meta.removeTag('property="og:image"');
    this.meta.removeTag('property="og:url"');
    this.meta.removeTag('name="twitter:card"');
    this.meta.removeTag('name="twitter:site"');
    this.meta.removeTag('name="twitter:title"');
    this.meta.removeTag('name="twitter:description"');
    this.meta.removeTag('name="twitter:image"');
    this.title.setTitle('title');
    this.meta.updateTag({ name: 'description', content: 'description' });
  }
}
