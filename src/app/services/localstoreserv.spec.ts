import { TestBed } from '@angular/core/testing';

import { LocalStoreServ } from './localstoreserv';

describe('Localstoreserv', () => {
  let service: LocalStoreServ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStoreServ);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
