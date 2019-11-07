import { Component, OnInit, Input } from '@angular/core';

import { projects } from '../projects';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input() index: 0;

  overlayActive: boolean;
  projects = projects;

  constructor() {
      this.overlayActive = false;

  }

  ngOnInit() {
  }

}