import { Component, OnInit } from '@angular/core';
import { ProjectList } from "../../../models/project-list";

@Component({
  selector: 'app-projectitem',
  templateUrl: './projectitem.component.html',
  styleUrls: ['./projectitem.component.css']
})
export class ProjectitemComponent implements OnInit {
    
  private projects: ProjectList;

  constructor() { }

  ngOnInit() {
  }

}
