import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    AppMaterialModule
  ]
  })
export class ProjectsModule { }
