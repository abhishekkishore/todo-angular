import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }
  
  private mouseenter(event: MouseEvent) {
      this.active = true;
      this.cursor = "pointer";
  }
  
  private mouseleave(event: MouseEvent) {
      this.active = false;
      this.cursor = "auto";
  }
}
