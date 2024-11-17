import { TestBed } from '@angular/core/testing';

import { CompartirDatosService } from './compartir-datos.service';

describe('CompartirDatosService', () => {
  let service: CompartirDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompartirDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
