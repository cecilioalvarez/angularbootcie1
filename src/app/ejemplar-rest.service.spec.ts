import { TestBed } from '@angular/core/testing';

import { EjemplarRestService } from './ejemplar-rest.service';

describe('EjemplarRestService', () => {
  let service: EjemplarRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EjemplarRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
