import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  seo = inject(SeoService);

  ngOnInit() {
    this.seo.setTitle('Home');
    this.seo.setMetaTags({
      title: 'Home',
      description: 'this is the home page'
    });
  }
}
