import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  seo = inject(SeoService);

  ngOnInit() {
    this.seo.setTitle('About');
    this.seo.setMetaTags({
      title: 'About',
      description: 'this is the about page'
    });
  }
}
