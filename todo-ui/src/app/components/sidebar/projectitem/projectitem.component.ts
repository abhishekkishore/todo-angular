import { Component, OnInit, Input } from '@angular/core';
import { MessageExchangeComponentService } from '../../../services/message-exchange/message-exchange-component.service';

@Component({
  selector: 'app-projectitem',
  templateUrl: './projectitem.component.html',
  styleUrls: ['./projectitem.component.css']
})
export class ProjectitemComponent {

  private active = false;
  private cursor = "auto";
  
  @Input() tasksLength: string;
  @Input() name: string;
  @Input() id: string;

  constructor(private messageExchange: MessageExchangeComponentService) { }
  
  private mouseenter(event: MouseEvent) {
      this.active = true;
      this.cursor = "pointer";
  }
  
  private mouseleave(event: MouseEvent) {
      this.active = false;
      this.cursor = "auto";
  }

  private onclick(event: MouseEvent) {
	console.log('click');
	this.messageExchange.updateSelectedProject(this.id);
  }
}
