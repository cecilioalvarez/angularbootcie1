import { TestBed } from '@angular/core/testing';

import { LibroRestService } from './libro-rest.service';

describe('LibroRestService', () => {
  let service: LibroRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibroRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
