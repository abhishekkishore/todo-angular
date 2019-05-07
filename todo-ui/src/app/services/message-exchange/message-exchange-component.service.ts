import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageExchangeComponentService {
    
  private selectedProjectOrderSubject = new BehaviorSubject<string>("1");
  selectedProjectOrder = this.selectedProjectOrderSubject.asObservable();

  constructor() { }
  
  public projectSelected(order: string): void {
      this.selectedProjectOrderSubject.next(order);
  }
}
