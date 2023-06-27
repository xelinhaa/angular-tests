import { TestBed } from '@angular/core/testing';
import { KarmaJasmineService } from './karma-jasmine.service';

describe('KarmaJasmineService', () => {
  let service: KarmaJasmineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(KarmaJasmineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería sumar dos números correctamente', () => {
    const resultado = service.sumar(2, 3);
    expect(resultado).toBe(5);
  });

  it('debería sumar números negativos correctamente', () => {
    const resultado = service.sumar(-5, -3);
    expect(resultado).toBe(-8);
  });

  it('debería sumar un número positivo y un número negativo correctamente', () => {
    const resultado = service.sumar(10, -5);
    expect(resultado).toBe(5);
  });

  it('debería restar dos números correctamente', () => {
    const resultado = service.restar(4, 2);
    expect(resultado).toBe(2);
  });

  it('debería restar dos números negativos correctamente', () => {
    const resultado = service.restar(-5, -2);
    expect(resultado).toBe(-3);
  });

  it('debería restar un número positivo y un número negativo correctamente', () => {
    const resultado = service.restar(8, -7);
    expect(resultado).toBe(15);
  });

  it('debería multiplicar dos números correctamente', () => {
    const resultado = service.multiplicar(5, 2);
    expect(resultado).toBe(10);
  });

  it('debería multiplicar números negativos correctamente', () => {
    const resultado = service.multiplicar(-6, -4);
    expect(resultado).toBe(24);
  });

  it('debería multiplicar un número positivo y un número negativo correctamente', () => {
    const resultado = service.multiplicar(8, -4);
    expect(resultado).toBe(-32);
  });

  it('debería dividir dos números correctamente', () => {
    const resultado = service.dividir(8, 2);
    expect(resultado).toBe(4);
  });

  it('debería dividir números negativos correctamente', () => {
    const resultado = service.dividir(-6, -3);
    expect(resultado).toBe(2);
  });

  it('debería dividir un número positivo y un número negativo correctamente', () => {
    const resultado = service.dividir(10, -2);
    expect(resultado).toBe(-5);
  });

});
