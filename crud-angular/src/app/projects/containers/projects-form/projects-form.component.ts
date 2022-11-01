import { ProjectsModel } from './../../models/projects.model';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects-form',
  templateUrl: './projects-form.component.html',
  styleUrls: ['./projects-form.component.scss']
})
export class ProjectsFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBilder: FormBuilder,
    private service: ProjectsService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {
      this.form = this.formBilder.group({
        _id: [null],
        name: [null],
        category: [null]
      })
    }

  ngOnInit(): void {
    const projects: ProjectsModel = this.route.snapshot.data['projects'];
    this.form.setValue({
      _id: projects._id,
      name: projects.name,
      category: projects.category
    })
  }

  onSubmit(){
    this.service.save(this.form.value).subscribe(result => this.onSuccess(), error => this.onError());
  }

  onCancel(){
    this.location.back()
  }

  private onSuccess() {
    this.snackBar.open('Curso salvo com sucesso!', '', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar curso.', '', { duration: 5000 });
  }
}
