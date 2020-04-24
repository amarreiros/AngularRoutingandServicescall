import { TestBed } from '@angular/core/testing';

import { ListcontactsservService } from './listcontactsserv.service';

describe('ListcontactsservService', () => {
  let service: ListcontactsservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListcontactsservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
