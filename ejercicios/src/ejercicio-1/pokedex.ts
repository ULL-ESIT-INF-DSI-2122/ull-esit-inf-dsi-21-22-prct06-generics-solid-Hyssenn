import {Dragonball} from './dragonball';
import {Fighter} from './fighter';
import {LegendsofHeroes} from './legendsOfHeroes';
import {Pokemon} from './pokemon';
import {StarWars} from './starWars';
/**
 * la clase que se va a encargar de guardar una lista de pokemons
 */
export class Pokedex {
  public listPokemons : Fighter[];
  /**
 * Va a crear una serie de pokemons y los va a guardar para tenerlos listos para usarlos cuando queramos
 *  @param listPokemons un array de pokemons para ir guardandolos en una lista
 */
  constructor() {
    let suicune :Fighter = new Pokemon('Suicune', 187, 2, 'pokemon', 75, 115, 140, 'agua');
    let luxray :Fighter = new Pokemon('Luxray', 42, 1.4, 'pokemon', 120, 79, 120, 'electrico');
    let palpatine :Fighter = new StarWars('Palpatine', 75, 1.72, 'starwars', 150, 60, 120);
    let rean :Fighter = new LegendsofHeroes('Rean', 70, 1.78, 'legendofheroes', 100, 100, 100);
    let goku :Fighter = new Dragonball('Goku', 62, 1.75, 'dragonball', 70, 110, 200);
    this.listPokemons = [suicune, luxray, palpatine, rean, goku];
  }
}
