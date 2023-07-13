import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {
  seo = inject(SeoService);

  ngOnInit() {
    this.seo.setTitle('Second');
    this.seo.setMetaTags({
      title: 'Second',
      description: 'this is the second page'
    });
  }
}
