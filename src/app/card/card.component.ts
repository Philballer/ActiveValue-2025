import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input()
  public cardLabel: string = 'Label';

  @Input()
  public cardTitle: string = 'This is the Card Title';

  @Input()
  public cardDescription: string =
    'At vero eos, dolor sit amet consectetur adipisicing elit. Quam, amet? Explicabo veniam adipisci, nesciunt culpa, inventore neque nisi necessitatibus';

  @Input()
  public buttonLabel: string = 'Do Something';
}
