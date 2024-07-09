import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  isMenuOpen:boolean = false;
  constructor() { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
