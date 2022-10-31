import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './containers/projects/projects.component';
import { ProjectsFormComponent } from './containers/projects-form/projects-form.component';

const routes: Routes = [
  {path : '', component: ProjectsComponent},
  {path : 'new', component: ProjectsFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
