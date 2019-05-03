import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectList } from "../../models/project-list";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { SharedData } from "../../common/shared-data";
import { Task } from '../../models/task';
import { Project } from '../../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient, private sharedData: SharedData) { }
  
  getAllProjects(): Observable<ProjectList> {
      return this.http.get<ProjectList>(environment.serverUri + "/projects");
  }

  getTasks(project: Project): Observable<Task> {
	  return this.http.get<Task>(environment.serverUri + "/projects" + project.id + "/tasks");
  }
  
  load(): Promise<any> {
      return this.getAllProjects().toPromise().then((data: ProjectList) => {
          console.log(data);
          this.sharedData.setProjects(data);
      });
  }
}
