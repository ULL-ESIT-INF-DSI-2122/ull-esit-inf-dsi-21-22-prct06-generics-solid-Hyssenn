/**
 * clase abstracta superclase de template Method
 */
export abstract class Filter {
  /**
   * constructor de filtro
   * @param num_ array de numero que nos dan para realizar operaciones de filtrado
   */
  constructor(protected num_ :number[]) {}
/**
 * metodo que ejecutara nuestro programa
 */
  public run() {
    this.selectFilterMapAddReduce();
    this.selectFilterMapSubReduce();
  }
  /**
   * Metodo reducir que reducira todo un array a un solo numero
   * @returns numero sumado o restado resultado de todo el array
   */
  protected abstract reduce(): number;
  /**
   * Metodo que se encargara de filtrar un array dependiendo de la funcion que le pase
   * @param callback funcion que se usa de filtrado
   * @returns nuevo array de numeros
   */
  protected filter(callback :Function) {
    this.num_ = callback();
    return this.num_;
  }
  /**
   * Metodo que se encargara de mapear un array dependiendo de la funcion que se le pase
   * @param callback funcion que se encarga del mapeo
   * @returns nuevo array de numero
   */
  protected map(callback :Function) :number[] {
    this.filter(callback());
    let aux :number[] = [];
    this.num_.forEach((numero) => {
      numero = callback();
      aux.push(numero);
    });
    return aux;
  }
  /**
   * metodo que funcionan como selectores
   */
  selectFilterMapAddReduce() {}
  selectFilterMapSubReduce() {}
}
/**
 * metodo cliente que se va a encargar de probar nuestra clase
 * @param filter recibe un objeto de la clase filtrado
 * @returns funcion que empieza a hacer que funcione nuestro codigo
 */
export function clientCode(filter :Filter) {
  return filter.run();
}
