import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox-hamburguer-menu',
  templateUrl: './checkbox-hamburguer-menu.component.html',
  styleUrls: ['./checkbox-hamburguer-menu.component.css']
})
export class CheckboxHamburguerMenuComponent {

  closeMenu(checkbox: HTMLInputElement) {
    checkbox.checked = false;
}

}
