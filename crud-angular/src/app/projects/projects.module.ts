import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsFormComponent } from './projects-form/projects-form.component';



@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectsFormComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
  })
export class ProjectsModule { }
