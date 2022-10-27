import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjctsComponent } from './projects/projects.component';

const routes: Routes = [
  {path : '', component: ProjctsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
