import { TestBed } from '@angular/core/testing';

import { AuthServ } from './authserv';

describe('Authserv', () => {
  let service: AuthServ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthServ);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
