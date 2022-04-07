import {pokeStatsInterface} from './pokeStatsCreator';
import {PokeStatsCreator} from './pokeStatsCreator';
import {Pokemon} from './pokemon';

/**
 * Clase creadora de objetos Pokemons se va a encargar de la creación de nuevos pokemons
 */
export class PokemonCreator extends PokeStatsCreator {
  /**
   * Asignación de todos los stats que tienen los pokemons
   * @param name nombre del pokemon
   * @param weigth peso del pokemon
   * @param height altura del pokemon
   * @param type tipo del pokemon
   * @param attack ataque del pokemon
   * @param defense defensa del pokemon
   * @param speed velocidad del pokemon
   * @param hp vida del pokemon
   */
  constructor(readonly name: string, readonly weigth: number, readonly height: number,
      protected type: string, protected attack: number, protected defense: number,
      protected speed: number, protected hp: number) {
    super();
  }
  /**
   * Metodo que se encarga de crear un objeto de tipo Pokemon
   * @returns retorna un nuevo pokemon
   */
  public factoryMethod(): pokeStatsInterface {
    return new Pokemon(this.name, this.weigth, this.height, this.type, this.attack,
        this.defense, this.speed, this.hp);
  }
}
