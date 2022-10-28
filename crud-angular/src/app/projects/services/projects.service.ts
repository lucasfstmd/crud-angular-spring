import { Injectable } from '@angular/core';
import { ProjectsModel } from '../models/projects.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  list(): ProjectsModel[] {
    return [
      { _id: "1", name: "Angular", category: "Front-End"}
    ];
  }
}
 /* Classe de service independente, que passa as dependencias para os componentes*/
