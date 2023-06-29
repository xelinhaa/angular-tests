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

  stringToChars(arrayStr: string): string[] {
    return arrayStr.split('')
  }

  sumaDigitos(a: number): number {
    let suma = 0;
    const numeroToString = a.toString();

    for (let i = 0; i < numeroToString.length; i++) {
      const digito = parseInt(numeroToString.charAt(i), 10);
      suma += digito;
    }
    return suma;
  }

  esAnagrama(array1: string, array2: string): boolean {
    if (array1.length !== array2.length) {
      return false;
    }
    const caracteres1 = array1.split('').sort().join('');
    const caracteres2 = array2.split('').sort().join('');
    return caracteres1 === caracteres2;
  }


  calcularAreaP(apotema: number, longLado: number, numLados: number): number {
    const perimetro = longLado * numLados;
    return (perimetro * apotema) / 2;
  }

  /*
  encontrarModa(array: number[]): number[] {
    const frecuencia: { [a: number]: number } = {};
    for (const num of array) {
      if (frecuencia[num]) {
        frecuencia[num]++;
      } else {
        frecuencia[num] = 1;
      }
    }
    let moda: number[]=[];
    let maxFrecuencia = 0;

    for (const num in frecuencia) {
      const frecuenciaActual = frecuencia[num];

      if(frecuenciaActual > maxFrecuencia) {
        moda = [Number(num)];
        maxFrecuencia =frecuenciaActual;
      } else if (frecuenciaActual === maxFrecuencia){
        moda.push(Number(num));
      }   
  }
  return moda;
  */

  //función reduce. a y b son los dos primeros numeros del array, 
  //tras la suma de ambos, a pasa a ser el resultado de esa suma y
  //se suma al siguiente número del array que pasa a ser b.
  calcularMedia(arrayNum: number[]): number {
    const suma = arrayNum.reduce((a, b) => a + b, 0);
    return suma / arrayNum.length;
  }
}







