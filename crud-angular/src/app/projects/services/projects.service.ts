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
  private readonly API_SAVE = 'api/save'
  private readonly API_FIND_BY_ID = 'api/'
  private readonly API_UPDATE = 'api/update/'

  //Injeção de dependencia pra acesso a API
  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<ProjectsModel[]>(this.API).pipe(
      first(),
      tap(projects => console.log(projects))
    );
  }

  loadById(id: string){
    return this.httpClient.get<ProjectsModel>(`${this.API_FIND_BY_ID}/${id}`)
  }

  save(record: ProjectsModel){
    return this.httpClient.post<ProjectsModel>(this.API_SAVE, record);
  }

}
 /* Classe de service independente, que passa as dependencias para os componentes*/
