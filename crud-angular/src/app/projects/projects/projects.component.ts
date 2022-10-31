import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { ProjectsModel } from '../models/projects.model';
import { ProjectsService } from '../services/projects.service';
import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Routes, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {

  projects$: Observable<ProjectsModel[]>;
  displayedColumns = ['_id','name', 'category', 'actions'];

  constructor(
    private ProjectsService: ProjectsService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute) {

    this.projects$ = this.ProjectsService.list()
    .pipe(
      catchError(error => {
        this.onError('Error ao carregar os projetos.');
        return of([])
      })
    );
  }

  onError(erroMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: erroMsg,
    });
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

  onAdd(){
    //Rota para adicionar projetos || Esse relative é para não duplicar o dominio anterior, para manutenção
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  inEdit(projects: ProjectsModel){

  }
}
