import { Component, OnInit } from '@angular/core';
import { ProjectsModel } from '../models/projects.model';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: ProjectsModel[] = [];
  displayedColumns = ['name', 'category'];

  constructor(private ProjectsService: ProjectsService) { }
    /* TODO document why this constructor is empty */

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
    this.projects = this.ProjectsService.list();
  }
}
