/**
 * la clase cifrado se va a encargar de todo lo relacionado con el encriptamiento
 */
export class Cifrado {
  /**
   * la clase cifrado puede actuar sobre cualquier alfabeto completo
   * @param alfabeto alfabeto que va a recibir para cifrar y descifrar en base a eso
   */
  constructor(private alfabeto :string) {
    this.alfabeto = alfabeto;
  }
  /**
   * Funcion que se encarga de la busqueda y la suma o resta de 2 letras en el cifrado
   * @param letraPalabra letra de la palabra a cifrar
   * @param letraClave letra de la clave que se use para cifrar
   * @param mode se especifica el modo que se va a usar
   * @returns el indice donde se encuentra la letra en el alfabeto
   */
  indexBusqueda(letraPalabra :string, letraClave :string, mode :string ='cifrar' || 'descifrar') :number {
    let indexClave = 0;
    let indexPalabra = 0;
    for (let j = 0; j < this.alfabeto.length; j++) {
      if (letraClave == this.alfabeto[j]) {
        indexClave = j + 1;
      }
      if (letraPalabra == this.alfabeto[j]) {
        indexPalabra = j;
      }
    }
    if (mode == 'cifrar') {
      return indexClave + indexPalabra;
    }
    return indexPalabra - indexClave;
  }
  /**
   * esta funcion se encarga de encriptar una palabra usando una clave
   * @param palabra palabra que se quiere cifrar
   * @param clave clave que se va a usar para cifrar
   * @returns una cadena de caracteres con la palabra ya encriptada
   */
  cifrar(palabra :string, clave :string) :string {
    let result :string[] = [];
    let k = 0;
    for (let i = 0; i < palabra.length; i++) {
      if (k == clave.length) {
        k = 0;
      }
      result.push(this.alfabeto[this.indexBusqueda(palabra[i], clave[k], 'cifrar') % this.alfabeto.length]);
      k++;
    }
    return result.join('');
  }
  /**
   * esta función se va a encargar del descifrado de una palabra usando una clave
   * @param palabra palabra que se va a desencriptar
   * @param clave clave que se usa para la desencriptacion
   * @returns la palabra ya desincriptada
   */
  descifrar(palabra :string, clave :string) :string {
    let result :string[] = [];
    let k = 0;
    for (let i = 0; i < palabra.length; i++) {
      if (k == clave.length) {
        k = 0;
      }
      result.push(this.alfabeto[(this.indexBusqueda(palabra[i], clave[k], 'descifrar') + this.alfabeto.length  ) % this.alfabeto.length]);
      k++;
    }
    return result.join('');
  }
}


let prueba = new Cifrado('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');

console.log(`el resultado de cifrar es: ${prueba.cifrar('HOLASOYUNAPRUEBA', 'CLAVE')}`);
console.log(`el resultado de descifrar es: ${prueba.descifrar('KAMWXRKVJFSDVAGD', 'CLAVE')}`);
