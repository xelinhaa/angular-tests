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
    const cadSinEspacios = cadena.toLowerCase().replace(' ', '');
    const cadInversa = cadSinEspacios.split('').reverse().join('');
    if (cadSinEspacios === cadInversa) {
      return true;
    } else {
      return false;
    }
  }

  calcularFactorial(a: number): Number {
    var factorial = 1;
    for (var i = 2; i <= a; i++) {
      factorial *= i;
    }
    return factorial;
  }







}
