import { ProjectTask } from "./project-task";

export class Project {
    id: string;
    name: string;
    description: string;
    order: string;
    tasks: ProjectTask[];
}