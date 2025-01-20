import { Component } from '@angular/core';
import { BaseIconComponent } from '../base-icon/base-icon.component';

@Component({
  selector: 'app-body-info',
  imports: [BaseIconComponent],
  templateUrl: './body-info.component.html',
  styleUrl: './body-info.component.scss',
})
export class BodyInfoComponent {
  public date = 'APRIL 2019';

  public header = 'Shopware als starker Partner';

  public paragraph1 =
    'Wir haben eine Vielzahl von individuellenWebschops für ein Kundenfeld entwickelt und umgesetzt - darunter sind namhafte Unternehmen wie van Laack und die Rheinishche Post.';

  public paragraph2 =
    'Bei der Umsetzung können wir auf Shopware als zuverlässigen Partner zurückgreifen. Durch die Business-Kooperation mit Shopware sind unsere zertifizierten Entwickler in der Lage, unseren Kunden immer die neusten, innovativsten und sichersten Shop-Lösungen anbieten zu können. Um immer auf dem aktuellsten Stand zu sein, treffen wir unseren Kooperationspartner auf der jährlichen Fachmesse „Shopware Community Day" und stehen in einem regelmäßigen Austausch. Dadurch sind wir in der Lage kurzfristig auf die neustens Entwicklungen zu reagieren. Dazu gehört unter anderem die Verwendung von Shopware 6 - wodurch wir schon jetzt qualitativ hochwertige Headless-Shop-Projekte (API-first) umsetzen können. ';
}
