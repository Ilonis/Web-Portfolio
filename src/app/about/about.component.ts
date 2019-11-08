import { Component, OnInit } from '@angular/core';

import { skills } from '../skills';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  skills = skills;

  constructor() { }

  ngOnInit() {
  }

}