import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KarmaJasmineService {

  constructor() { }

  sumar(a: number, b: number): number {
    return a + b;
  }

  restar(a: number, b: number): number {
    return a - b;
  }

  multiplicar(a: number, b: number): number {
    return a * b;
  }

  dividir(a: number, b: number): number {
    return a / b;
  }

  numeroPar(a: number): boolean {
    return a % 2 === 0;
  }

  palindromo(cadena: string): boolean {
    const cadSinEspacios = cadena.toLowerCase().replace(' ', '');
    const cadInversa = cadSinEspacios.split('').reverse().join('');
    return cadSinEspacios === cadInversa;
  }

  calcularFactorial(a: number): Number {
    var factorial = 1;
    for (var i = 2; i <= a; i++) {
      factorial *= i;
    }
    return factorial;
  }

  obtenerMax(a: number, b: number): number {
    return Math.max(a, b);
  }

  convertirAMayusculas(cadena: string): string {
    return cadena.toUpperCase();
  }

  comprobarPrimo(a: number): boolean {
    if (a <= 1) {
      return false;
    }
    for (var i = 2; i * i <= a; i++) {
      if (a % i === 0) {
        return false;
      } 
    }
        return true;
      }
    }







