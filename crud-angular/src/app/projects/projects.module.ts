import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { ProjectsFormComponent } from './containers/projects-form/projects-form.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './containers/projects/projects.component';
import { ProjectListComponent } from './components/project-list/project-list.component';



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
