import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

import { projects } from '../projects';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('openClose', [
      state('closed', style({
        top: '100%',
        opacity: 0,
        'z-index': -1,
      })),
      state('open', style({
        top: '0px',
        opacity: 1,
        'z-index': 50,
      })),
      transition('closed => open', [
        animate('0.5s ease-in-out')
      ]),
      transition('open => closed', [
        animate('0.5s ease-in-out')
      ]),
    ]),
  ],
})
export class CardComponent implements OnInit {
  
  @Input() index: 0;

  overlayActive: boolean;
  projects = projects;

  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor() {
      this.overlayActive = false;

  }

  ngOnInit() {
  }

}