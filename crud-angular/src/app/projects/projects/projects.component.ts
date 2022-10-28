import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { ProjectsModel } from '../models/projects.model';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {

  projects$: Observable<ProjectsModel[]>;
  displayedColumns = ['name', 'category'];

  constructor(private ProjectsService: ProjectsService) {
    /* TODO document why this constructor is empty */
    this.projects$ = this.ProjectsService.list()
    .pipe(
      catchError(error => {
        console.log(error);
        return of([])
      })
    );
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }
}
