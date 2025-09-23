import { TestBed } from '@angular/core/testing';

import { StoreServ } from './storeserv';

describe('Storeserv', () => {
  let service: StoreServ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreServ);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
