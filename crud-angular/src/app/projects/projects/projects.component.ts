import { Component, OnInit } from '@angular/core';
import { ProjectsModel } from '../models/projects.model';

@Component({
  selector: 'app-projetos',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjctsComponent implements OnInit {

  projects: ProjectsModel[] = [{_id: "1", name: "Angular", category: "Front-End"}];
  displayedColumns = ['name', 'category'];

  constructor() { }

  ngOnInit(): void {
  }
}
