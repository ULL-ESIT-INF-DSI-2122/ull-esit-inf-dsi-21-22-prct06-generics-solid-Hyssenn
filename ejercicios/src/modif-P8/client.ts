
import {PokeStatsCreator} from './pokeStatsCreator';
import {PokemonCreator} from './pokemonCreator';
/**
 * Funcion cliente que va crear los diferentes productor y activando la logica del producto
 * @param PokeStatsCreator El producto creado
 */
export function clientCode(PokeStatsCreator :PokeStatsCreator) {
  console.log(PokeStatsCreator.logic());
}

clientCode(new PokemonCreator('Suicune', 187, 2, 'agua', 75, 115, 85, 100));
clientCode(new PokemonCreator('Squirtle', 9, 0.5, 'agua', 48, 65, 43, 44));
clientCode(new PokemonCreator('Luxray', 42, 1.4, 'electrico', 120, 79, 70, 80));
