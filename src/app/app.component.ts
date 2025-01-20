import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { BaseIconComponent } from './base-icon/base-icon.component';
import { BodyInfoComponent } from './body-info/body-info.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, SliderComponent, BodyInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'active-value-aufgabe';
}
