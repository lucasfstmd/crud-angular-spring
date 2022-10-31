import { ProjectsModel } from './../models/projects.model';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { ProjectsService } from '../services/projects.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsResolver implements Resolve<ProjectsModel> {

  constructor(private service: ProjectsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProjectsModel> {
    if(route.params && route.params['id']){
      return this.service.loadById(route.params['id'])
    }
    return of({_id: '', name: '', category: ''});
  }
}
