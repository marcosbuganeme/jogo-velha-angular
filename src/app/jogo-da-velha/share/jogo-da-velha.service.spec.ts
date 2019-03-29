import { TestBed } from '@angular/core/testing';

import { JogoDaVelhaService } from './jogo-da-velha.service';

describe('JogoDaVelhaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('deve criar componente jogo da velha service', () => {
    const service: JogoDaVelhaService = TestBed.get(JogoDaVelhaService);
    expect(service).toBeTruthy();
  });
});
