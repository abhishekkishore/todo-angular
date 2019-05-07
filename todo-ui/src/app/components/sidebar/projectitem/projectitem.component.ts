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
  @Input() order: string;

  constructor(private messageExchangeComponent: MessageExchangeComponentService) { }
  
  ngOnInit() {
      this.messageExchangeComponent.selectedProjectOrder.subscribe(order=>this.clearSelection(order));
  }
  
  private clearSelection(order: string): void {
      if(order!=null && order !== this.order) {
          this.selected = false;
      }
      else{
          this.selected = true;
      }
  }
  
  private mouseenter(event: MouseEvent) {
      this.active = true;
      this.cursor = "pointer";
  }
  
  private mouseleave(event: MouseEvent) {
      this.active = false;
      this.cursor = "auto";
  }

  private onclick(event: MouseEvent) {
	this.active = false;
//	this.selected = true;
	this.messageExchangeComponent.projectSelected(this.order);
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
