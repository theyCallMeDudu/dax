import { Component, OnInit } from '@angular/core';
import { sectionsData } from 'src/app/data/sectionsData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sections:any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.sections = sectionsData;
  }

}
