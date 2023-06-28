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
    if (a % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }
  palindromo(cadena: string): boolean {
    var cadSinEspacios = cadena.replace(' ', '');
    var cadInversa = cadSinEspacios.split('').reverse().join('');
    if (cadSinEspacios == cadInversa) {
      return true;
    } else {
      return false;
    }
  }

  



}
