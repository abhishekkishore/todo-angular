import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-taskitem',
  templateUrl: './taskitem.component.html',
  styleUrls: ['./taskitem.component.css']
})
export class TaskitemComponent implements OnInit {
	
  @Input() taskName: string;

  constructor() { }

  ngOnInit() {
  }

}
