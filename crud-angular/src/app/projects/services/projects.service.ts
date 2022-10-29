import { Injectable } from '@angular/core';
import { ProjectsModel } from '../models/projects.model';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  //Caminho da API
  private readonly API = 'api/list';

  //Injeção de dependencia pra acesso a API
  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<ProjectsModel[]>(this.API).pipe(
      first(),
      tap(projects => console.log(projects))
    );
  }
}
 /* Classe de service independente, que passa as dependencias para os componentes*/
