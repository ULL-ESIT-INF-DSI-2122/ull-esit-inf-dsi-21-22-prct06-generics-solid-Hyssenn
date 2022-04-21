import {Filter} from './filter';
/**
 * subclase de filtro que se encargara de restar a la hora de reducir
 */
export class FilterMapsubReduce extends Filter {
  /**
   * constructor de la subclase filterMapsubReduce
   * @param number array de numeros para filtrar
   */
  constructor(protected number: number[]) {
    super(number);
  }
  /**
   * metodo que reduce el array a un solo numero
   * @returns numero ressultado de la resta de los elementos del array
   */
  protected reduce(): number {
    let singleNumber :number = 0;
    this.number.forEach((numero) => {
      singleNumber -= numero;
    });
    return singleNumber;
  }
  selectFilterMapsubReduce(): void {
    console.log('Has seleccionado filterMapsubReduce');
  }
}
