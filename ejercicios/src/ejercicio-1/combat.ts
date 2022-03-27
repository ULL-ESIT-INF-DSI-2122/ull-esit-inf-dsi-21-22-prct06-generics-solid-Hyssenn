import {Pokemon} from './pokemon';
import {Pokedex} from './pokedex';
import {Fighter} from './fighter';
import {UniverseChecker} from './universeChecker';
/**
 * La clase combat va a encargarse el combate entre 2 luchadores
 */
export class Combat {
  /**
   * Esta función se encarga del cálculo del daño de un pokemon atacante vs otro
   * @param atacante el luchador que ataca
   * @param defensor el luchador que va a recibir el ataque
   * @param efectividad la matriz que contiene todos las efectividades de tipo
   * @returns el daño que se realiza
   */
  attack(atacante :Fighter, defensor :Fighter) :number {
    let efectividad :UniverseChecker = new UniverseChecker;
    let efectivo = efectividad.checkType(atacante, defensor);
    const damage = Math.round(50 * (atacante.getAttack() / defensor.getDefense()) * efectivo);
    atacante.frase();
    console.log(`${atacante.name} ataca a ${defensor.name} y le hace ${damage} puntos de daño`);
    if (efectivo == 2) {
      console.log(`El ataque fue muy efectivo...`);
    } else if (efectivo == 1/2) {
      console.log(`El ataque no fue muy efectivo...`);
    }
    return damage;
  }
  /**
  * Esta función se encarga de organizar la pelea por turnos de 2 luchadores
   * @param fighter1 el luchador que ataca
   * @param fighter2 el luchador que va a recibir el daño
   * @returns el nombre del luchador ganador
   */
  start(fighter1 :Fighter, fighter2 :Fighter) :string {
    fighter2.setHp(fighter2.getHp() - this.attack(fighter1, fighter2));
    console.log(`${fighter2.name} tiene ahora ${fighter2.getHp()} de vida`);
    if (fighter2.getHp() > 0) {
      return this.start(fighter2, fighter1);
    } else {
      console.log(`${fighter2.name} ha sido debilitado. ${fighter1.name} Es el ganador del combate`);
    }
    return fighter1.name;
  }
}
let luchadores :Pokedex = new Pokedex();
let combate = new Combat;
const luchador1 = luchadores.listPokemons[3];
const luchador2 = luchadores.listPokemons[2];

combate.start(luchador1, luchador2);


