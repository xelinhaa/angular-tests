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

  comprobarPositivo(a: number): boolean {
    return a > 0 === true;
  }

  elementosArray(array: any[]): number {
    return array.length;
  }

  comprobarSub(cadena: string, subcadena: string): boolean {
    return cadena.includes(subcadena);
  }

  obtenerPromedio(array: number[]): number {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
      suma += array[i];
    }
    const promedio = suma / array.length;
    return promedio;
  }
  /*
  stringToChars(arrayStr: string[]): string[] {
    const arrayChar = arrayStr.split(',')
  return 
  }*/

  sumaDigitos(a: number): number {
    let suma = 0;
    const numeroToString = a.toString();

    for (let i = 0; i < numeroToString.length; i++) {
      const digito = parseInt(numeroToString.charAt(i), 10);
      suma += digito;
    }
    return suma;
  }
}







