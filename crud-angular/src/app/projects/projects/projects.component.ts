import { Component, OnInit } from '@angular/core';
import { ProjectsModel } from '../models/projects.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: ProjectsModel[] = [{_id: "1", name: "Angular", category: "Front-End"}];
  displayedColumns = ['name', 'category'];

  constructor() { /* TODO document why this constructor is empty */  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty

  }
}
