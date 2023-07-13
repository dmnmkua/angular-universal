import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  seo = inject(SeoService);

  ngOnInit() {
    this.seo.setTitle('First');
    this.seo.setMetaTags({
      title: 'First',
      description: 'this is the first page'
    });
  }
}
