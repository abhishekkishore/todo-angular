import { Component, Input, OnInit } from '@angular/core';
import { MessageExchangeComponentService } from "../../../services/message-exchange/message-exchange-component.service";

@Component({
  selector: 'app-projectitem',
  templateUrl: './projectitem.component.html',
  styleUrls: ['./projectitem.component.css']
})
export class ProjectitemComponent implements OnInit{

  private active = false;
  private cursor = "auto";
  private selected = false;
  
  @Input() tasksLength: string;
  @Input() name: string;
  @Input() id: string;
  @Input() order: string;

  constructor(private messageExchange: MessageExchangeComponentService) { }
  
  ngOnInit() {
      this.messageExchange.selectedProjectOrder.subscribe(order=>this.handleSelection(order));
  }

  private handleSelection(order: string) {
	this.updateSelection(order);
	if(this.selected) {
		this.messageExchange.updateSelectedProject(this.id);
	}
  }  
  private updateSelection(order: string): void {
      if(order!=null && order !== this.order) {
          this.selected = false;
      }
      else{
          this.selected = true;
      }
  }
  
  private mouseenter(event: MouseEvent) {
      this.active = true;
      
  }
  
  private mouseleave(event: MouseEvent) {
      this.active = false;
      
  }

  private onclick(event: MouseEvent) {
	console.log('click');
	//this.messageExchange.updateSelectedProject(this.id);
	this.active = false;
//	this.selected = true;
	this.messageExchange.projectSelected(this.order);
  }
  
  private firstProject(): boolean {
      if(this.order==='1') {
          this.selected = true;
          this.active = false;
          return true;
      }
      return false;
  }
}
