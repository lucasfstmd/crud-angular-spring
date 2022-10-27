import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjctsComponent } from './projects/projects.component';



@NgModule({
  declarations: [
    ProjctsComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MatTableModule
  ]
})
export class ProjectsModule { }
