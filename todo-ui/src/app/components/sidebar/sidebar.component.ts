import { Component, OnInit } from '@angular/core';
import { SharedData } from "../../common/shared-data";
import { ProjectList } from "../../models/project-list";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    
  private projects: ProjectList;

  constructor(private sharedData: SharedData) { }

  ngOnInit() {
      this.projects = this.sharedData.getProjects();
  }

}
