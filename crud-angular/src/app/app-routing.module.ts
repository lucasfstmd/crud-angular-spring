/*Rotas do package app*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'projects'},
  // Se após o http://localhost:4200 tiver vazio, redireciona para o project
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)}
  // Se após o http://localhost:4200 vier o /projects, rederiza o project.module
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
