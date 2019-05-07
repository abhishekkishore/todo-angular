import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageExchangeComponentService {
	
  private selectedProjectMessage = new Subject<string>();
  currentMessage = this.selectedProjectMessage.asObservable();
    
  private selectedProjectOrderSubject = new BehaviorSubject<string>("1");
  selectedProjectOrder = this.selectedProjectOrderSubject.asObservable();

  constructor() { }

  public updateSelectedProject(projectId: string) {
	this.selectedProjectMessage.next(projectId);
  }
  
  public projectSelected(order: string): void {
      this.selectedProjectOrderSubject.next(order);
  }
}
