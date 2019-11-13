import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('openClose', [
      state('closed', style({
        top: '100vh',
        opacity: 0,
        'z-index': -1,
      })),
      state('open', style({
        top: '0px',
        opacity: 1,
        'z-index': 100,
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
export class HeaderComponent implements OnInit {

  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

  ngOnInit() {
  }

}