import { TestBed } from '@angular/core/testing';

import { MessageExchangeComponentService } from './message-exchange-component.service';

describe('MessageExchangeComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageExchangeComponentService = TestBed.get(MessageExchangeComponentService);
    expect(service).toBeTruthy();
  });
});
