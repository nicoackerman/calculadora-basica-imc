import { TestBed } from '@angular/core/testing';

import { EnviarDatosService } from './enviar-datos.service';

describe('EnviarDatosService', () => {
  let service: EnviarDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviarDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
