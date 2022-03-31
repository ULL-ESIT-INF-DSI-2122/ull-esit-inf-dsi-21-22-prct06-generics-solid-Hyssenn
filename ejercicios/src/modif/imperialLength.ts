/**
 * clase que trabaja con unidades imperiales
 */
export class ImperialLength {
  protected imperialNum :number;
  protected format :string;
  /**
   * El constructor recibe un número y por defecto se va a empezar a trabajr con la unidad 'pies'
   * @param number numero que va a trabajar el sistema imperial
   */
  constructor(number :number) {
    this.imperialNum =  number;
    this.format = 'feet';
  }
  /**
   * Este método recibe la unidad que quiere recibir y te la cambia a dicha unidad
   * @param modo la unidad la cual se quiere convertir
   */
  convert(modo :string) {
    if (modo == 'inches') {
      this.imperialNum = this.imperialNum * 12;
    }
    if (modo = 'yards') {
      this.imperialNum = this.imperialNum *  0.33333;
    }
    if (modo = 'miles') {
      this.imperialNum = this.imperialNum * 0.00018939;
    }
    this.format = modo;
  }
}
