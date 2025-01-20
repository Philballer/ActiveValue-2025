import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-icon',
  imports: [],
  templateUrl: './base-icon.component.html',
  styleUrl: './base-icon.component.scss',
})
export class BaseIconComponent {
  @Input()
  public imageUrl: string = '';

  @Input()
  public imageAlt: string = '';

  @Input()
  public classes: string = '';
}
