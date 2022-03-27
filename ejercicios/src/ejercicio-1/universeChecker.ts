import {Fighter} from './fighter';
/**
 * @enum type donde se van a guardar los tipos para la creación de la matriz
 */
enum type {
dragonball,
legendofheroes,
pokemon,
starwars
}
/**
 * Clase para trabajar con los distintos universos de los luchadores
 */
export class UniverseChecker {
  private matrixTypes :number[][] = [[]];
  /**
 * El constructor no recibe nada, solo crea una matriz de cantidad de tipos x cantidad de tipos
 * y usando como fila el tipo del atacante y como columna el tipo del defensor introduce en cada 
 * espacio la efectividad.
 * @param matrixTypes Matriz que guarda tipos
 * dragonball > star wars
 * legendsOfheroes > pokemon
 * pokemon > dragonball
 * star wars > legendsOfHeroes
 */
  constructor() {    // DB //LoH // poke //SW
    this.matrixTypes = [[1,   1,  1/2,  2], // dragonball
                        [1,   1,  2,  1/2], // legendsofheroes
                        [2,   1/2,  1,  1], // pokemon
                        [1/2,   2,  1,  1]]; // starwars
  /* this.matrixTypes[0][0] = 1;
    this.matrixTypes[0][1] = 1;
    this.matrixTypes[0][2] = 1/2;
    this.matrixTypes[0][3] = 2;
    this.matrixTypes[1][0] = 1;
    this.matrixTypes[1][1] = 1;
    this.matrixTypes[1][2] = 2;
    this.matrixTypes[1][3] = 1/2;
    this.matrixTypes[2][0] = 2;
    this.matrixTypes[2][1] = 1/2;
    this.matrixTypes[2][2] = 1;
    this.matrixTypes[2][3] = 1;
    this.matrixTypes[3][0] = 1/2;
    this.matrixTypes[3][1] = 2;
    this.matrixTypes[3][2] = 1;
    this.matrixTypes[3][3] = 1; */
  }
  /**
   * funcion que se encarga de calcular la efectividad del ataque
   * @param atacante el luchador que realiza el ataque
   * @param defensor el luchador que se defiende del ataque
   * @returns la efectividad en un xn
   */
  checkType(atacante: Fighter, defensor: Fighter) :number {
    let x = 0;
    let y = 0;
    for (let i = 0; i <= 3; i++) {
      if (type[i] == atacante.getUniverse()) {
        x = i;
      }
      if (type[i] == defensor.getUniverse()) {
        y = i;
      }
    }
    return this.matrixTypes[x][y];
  }
}
