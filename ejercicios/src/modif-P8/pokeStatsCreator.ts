/**
 * interface that contains all the basic stats for a pokemon
 */
export interface pokeStatsInterface {
  name: string;
  weigth: number;
  height: number;
  type: string;
  attack: number;
  defense: number;
  speed: number;
  hp: number;
  getType() :string;
  getName() :string;
}
/**
 * this is the default creator of Stats of a Pokemon object
 */
export abstract class PokeStatsCreator {
  /**
   * metodo de fabrica para que devuelve un tipo PokeStats
   */
  public abstract factoryMethod(): pokeStatsInterface;
  /**
 * Logica que se ejecuta a la hora de crear un pokemon
 * @returns retorna una frase cuando se crea un objeto pokemon
 */
  public logic(): string {
    const pokeStats = this.factoryMethod();
    return `Soy ${pokeStats.getName()}, ` +
           `y soy de tipo: ${pokeStats.getType()} `;
  }
}
