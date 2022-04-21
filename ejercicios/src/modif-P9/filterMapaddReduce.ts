import {Filter} from './filter';
/**
 * subclase de filtro con funcionalidad de sumar en el reduce
 */
export class FilterMapaddReduce extends Filter {
  /**
   * constructor de la subclase filtro
   * @param number array de numero para filtrar y sumar
   */
  constructor(protected number: number[]) {
    super(number);
  }
  /**
   * metodo que reduce el array a un solo numero
   * @returns numero que sera el resultado de la suma del array
   */
  protected reduce(): number {
    let singleNumber :number = 0;
    this.number.forEach((numero) => {
      singleNumber += numero;
    });
    return singleNumber;
  }
  /**
   * funcion de seleccion
   */
  selectFilterMapaddReduce(): void {
    console.log('Has seleccionado filterMapaddReduce');
  }
}
