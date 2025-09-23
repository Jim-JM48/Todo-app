import { TestBed } from '@angular/core/testing';

import { TodoServ } from './todoserv';

describe('Todoserv', () => {
  let service: TodoServ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoServ);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
