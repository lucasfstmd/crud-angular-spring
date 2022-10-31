import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { ProjectsFormComponent } from './projects-form/projects-form.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectListComponent } from './project-list/project-list.component';



@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectsFormComponent,
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
  })
export class ProjectsModule { }
