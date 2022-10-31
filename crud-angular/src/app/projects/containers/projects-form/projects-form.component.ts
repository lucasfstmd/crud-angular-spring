import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

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
    private location: Location) {
      this.form = this.formBilder.group({
        name: [null],
        category: [null]
      })
    }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.save(this.form.value)
    .subscribe(result => console.log(result), error => {
      this.snackBar.open('Erro ao salvar Projeto', '', {duration: 5000})
    });

  }

  onCancel(){
    this.location.back()
  }
}
