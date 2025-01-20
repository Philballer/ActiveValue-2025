import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { BodyInfoComponent } from './body-info/body-info.component';
import { CardComponent } from './card/card.component';
import { NewsletterBannerComponent } from './newsletter-banner/newsletter-banner.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    SliderComponent,
    BodyInfoComponent,
    CardComponent,
    NewsletterBannerComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'active-value-aufgabe';
}
