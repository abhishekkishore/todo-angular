import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageExchangeComponentService {
	
  private selectedProjectMessage = new Subject<string>();
  currentMessage = this.selectedProjectMessage.asObservable();

  constructor() { }

  public updateSelectedProject(projectId: string) {
	this.selectedProjectMessage.next(projectId);
  }
}
