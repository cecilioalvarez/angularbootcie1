import { TestBed } from '@angular/core/testing';

import { SocioRESTService } from './socio-rest.service';

describe('SocioRESTService', () => {
  let service: SocioRESTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocioRESTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
