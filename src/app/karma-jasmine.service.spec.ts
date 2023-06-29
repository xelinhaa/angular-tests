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

  it('debería comprobar si el número es par', () => {
    const resultado = service.numeroPar(8);
    expect(resultado).toBe(true);
  });

  it('debería comprobar si el número es impar', () => {
    const resultado = service.numeroPar(5);
    expect(resultado).toBe(false);
  });

  it('debería comprobar si la cadena es un palíndromo', () => {
    const resultado = service.palindromo('luz azul');
    expect(resultado).toBe(true);
  });

  it('debería comprobar si la cadena no es un palíndromo', () => {
    const resultado = service.palindromo('hola qué tal');
    expect(resultado).toBe(false);
  });

  it('calcular el factorial de un número', () => {
    const resultado = service.calcularFactorial(4);
    expect(resultado).toBe(24);
    const resultado2 = service.calcularFactorial(5);
    expect(resultado2).toBe(120);
  });

  it('comprobar el máximo de dos números', () => {
    const resultado = service.obtenerMax(8, 25);
    expect(resultado).toBe(25);
    const resultado2 = service.obtenerMax(15, 3);
    expect(resultado2).toBe(15);
  });

  it('comprobar si convierte a mayúsculas', () => {
    const resultado = service.convertirAMayusculas('mi mamá me mima');
    expect(resultado).toBe("MI MAMÁ ME MIMA");
    const resultado2 = service.convertirAMayusculas('El patio de mi casa');
    expect(resultado2).toBe('EL PATIO DE MI CASA');
  });

  it('comprobar si un número es Primo', () => {
    const resultado = service.comprobarPrimo(7);
    const resultado2 = service.comprobarPrimo(19);
    expect(resultado).toBe(true);
    expect(resultado2).toBe(true);
  });

  it('comprobar si un número no es primo', () => {
    const resultado = service.comprobarPrimo(4);
    const resultado2 = service.comprobarPrimo(15);
    expect(resultado).toBe(false);
    expect(resultado2).toBe(false);
  });

  it('comprobar si un número es positivo', () => {
    const resultado = service.comprobarPositivo(9);
    const resultado2 = service.comprobarPositivo(14);
    expect(resultado).toBe(true);
    expect(resultado2).toBe(true);
  });

  it('comprobar si un númerono es negativo', () => {
    const resultado = service.comprobarPositivo(-5);
    const resultado2 = service.comprobarPositivo(-24);
    expect(resultado).toBe(false);
    expect(resultado2).toBe(false);
  });

  it('calcular número de elementos de un array', () => {
    const resultado = service.elementosArray(['hasta', 'luego', 'lucas']);
    const resultado2 = service.elementosArray([1, 2, 3, 4, 5, 6]);
    expect(resultado).toEqual(3);
    expect(resultado2).toEqual(6);
  });

  it('comprobar si una subcadena pertenece a una cadena', () => {
    const resultado = service.comprobarSub('hola qué hase?', 'hola');
    const resultado2 = service.comprobarSub('una sombrilla azul', 'azul');
    expect(resultado).toBe(true);
    expect(resultado2).toBe(true);
  });

  it('comprobar si una subcadena no pertenece a una cadena', () => {
    const resultado = service.comprobarSub('hola qué hase?', 'ventana');
    const resultado2 = service.comprobarSub('una sombrilla azul', 'bronceador');
    expect(resultado).toBe(false);
    expect(resultado2).toBe(false);
  });

  it('comprobar si calcula el promedio de un array de números', () => {
    const resultado = service.obtenerPromedio([2, 5, 14, 7, 9, 2]);
    const resultado2 = service.obtenerPromedio([-5, 6, 18, -2, 3]);
    expect(resultado).toBe(6.5);
    expect(resultado2).toBe(4);
  });


  it('comprueba si convierte un array de strings a caracteres', () => {
    const resultado = service.stringToChars('hola');
    expect(resultado).toEqual(['h', 'o', 'l', 'a']);
  });

  it('comprueba si calcula la suma de dígitos', () => {
    expect(service.sumaDigitos(458)).toBe(17);
  });

  it('comprueba si la cadena es un anagrama de otra', () => {
    expect(service.esAnagrama('alex', 'xela')).toEqual(true);
    expect(service.esAnagrama('casa', 'puerta')).toEqual(false);
  });

  it('calcula el área de un polígono regular', () => {
    expect(service.calcularAreaP(8, 10, 3)).toBe(120);
    expect(service.calcularAreaP(5, 7, 4)).toBe(70);
  });

  it('calcula la media de un array de números', () => {
    expect(service.calcularMedia([2,4,6,8,10])).toBe(6);
    expect(service.calcularMedia([45,8,-74,-5,2])).toBe(-4.8);
  });





});
