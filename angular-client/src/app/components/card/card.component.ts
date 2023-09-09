import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() cardText: string= '';
  @Input() cardHeader: string = '';
  @Input() cardParagraph: string = '';
  @Input() cardLink: string = ''; 
  @Input() cardRouteLink: string = '';

  constructor (
    private router: Router,
    ) {}

  onCardClick() {
    if (this.cardLink != '') {
      window.open(this.cardLink, '_blank'); // Open the link in a new tab
    } else if (this.cardRouteLink != '') {
      this.router.navigate([`/${this.cardRouteLink}`]);
    }
  }
}
