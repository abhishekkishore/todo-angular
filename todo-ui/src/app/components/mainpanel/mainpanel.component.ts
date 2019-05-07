import { Component, OnInit} from '@angular/core';
import { MessageExchangeComponentService } from '../../services/message-exchange/message-exchange-component.service';
import { ProjectsService } from '../../services/projects/projects.service';
import { Task } from '../../models/task';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-mainpanel',
  templateUrl: './mainpanel.component.html',
  styleUrls: ['./mainpanel.component.css']
})
export class MainpanelComponent implements OnInit {
	
  private tasks: Observable<Task[]>;

  constructor(private messageExchange: MessageExchangeComponentService, private projectsService: ProjectsService) { }

  ngOnInit() {
	this.messageExchange.currentMessage.subscribe(id=>this.refreshTaskList(id));
  }

  private refreshTaskList(projectId: string) {
	this.tasks = this.projectsService.getTasks(projectId);
  }

}
