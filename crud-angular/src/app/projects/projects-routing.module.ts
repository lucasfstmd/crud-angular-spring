import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsFormComponent } from './containers/projects-form/projects-form.component';
import { ProjectsComponent } from './containers/projects/projects.component';
import { ProjectsResolver } from './guards/projects.resolver';

const routes: Routes = [
  {path : '', component: ProjectsComponent},
  {path : 'new', component: ProjectsFormComponent, resolve: {projects: ProjectsResolver}},
  {path : 'update/:id', component: ProjectsFormComponent, resolve: {projects: ProjectsResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
