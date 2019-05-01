import { Injectable } from "@angular/core";
import { ProjectList } from "../models/project-list";

@Injectable()
export class SharedData {
    private projects: ProjectList;

    public getProjects() {
        return this.projects;
    }
    
    public setProjects(projects: ProjectList) {
        this.projects = projects;
    }
}