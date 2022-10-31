import { ProjectsModel } from './../models/projects.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  @Input() projects: ProjectsModel[] = [];
  @Output() add = new EventEmitter(false);

  readonly displayedColumns = ['_id','name', 'category', 'actions'];

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
    this.add.emit(true);
  }

  onEdit(){
    console.log('edit')
  }

  onDelet(){
    console.log('delet')
  }

}
