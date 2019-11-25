import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { projects } from '../../projects';
import { projectDetails } from '../../project-details';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit {

  projects = projects;
  projectDetails = projectDetails;
  path;
  index;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // In order to match the descriptions with each project, I had to read the path, compare it, and pull the descript array for that project
    this.path = this.route.snapshot.paramMap.get("path");
    for (let i in projects) {
      if (projects[i].path === this.path) {
        this.index = projects[i].index;
      }
    }
  }

}