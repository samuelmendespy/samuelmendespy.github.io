import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(protected router: Router) {}
  
  isCompact(): boolean {
    return this.router.url !== '/';
  }

  getContentBasedOnRoute(): string {
    const currentRoute = this.router.url;

    if (currentRoute.includes('about')) {
      return 'About';
    } else if (currentRoute.includes('projects')) {
      return 'Projects';
    } else {
      return 'Samuel Mendes';
    }
  }

}
