import { Injectable } from '@angular/core';
import { ProjectsModel } from '../models/projects.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  //Injeção de dependencia pra acesso a API
  constructor(private httpClient: HttpClient) { }

  list(): ProjectsModel[] {
    return [
      { _id: "1", name: "Angular", category: "Front-End"}
    ];
  }
}
 /* Classe de service independente, que passa as dependencias para os componentes*/
