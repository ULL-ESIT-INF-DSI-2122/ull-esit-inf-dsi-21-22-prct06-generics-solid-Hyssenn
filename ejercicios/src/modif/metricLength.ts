/**
 * clase que trabaja con el sistema métrico
 */
export class MetricLength {
  protected MetricNum :number;
  protected format :string;
  /**
 * El constructor va a recibir por defecto un número con la unidad metro
 * @param number el número con el que va a trabajar la clase metrico
 */
  constructor(number :number) {
    this.MetricNum =  number;
    this.format = 'metro';
  }
  /**
   * funcion que convierte de metro a centimetro
   */
  convertTocm() {
    this.MetricNum = this.MetricNum /100;
    this.format = 'centimetro';
  }
  /**
   * funcion que convierte de metro a km
   */
  convertTokm() {
    this.MetricNum = this.MetricNum * 100;
    this.format = 'kilometro';
  }
  /**
   * devuelve el numero con el que se está trabajando
   * @returns el numero en formato metrico
   */
  getNum() :number {
    return this.MetricNum;
  }
  /**
   * cambia el numero con el que se está trabajando
   * @param number el numero que se le quiere asignar
   */
  setNum(number :number) {
    this.MetricNum = number;
  }
  /**
   * cambia la unidad que se esta trabajando
   * @param string la unidad con la que se quiere trabajar
   */
  setFormat(string :string) {
    this.format = string;
  }
  getFormat() {
    return this.format;
  }
}
