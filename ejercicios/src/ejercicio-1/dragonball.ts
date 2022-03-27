import {Fighter} from './fighter';
/**
 * Clase que va a definir un luchador del universo de dragonball
 */
export class Dragonball extends Fighter {
/**
 * El constructor le va a añadir todos los parametros del luchador
 * @param name nombre del luchador
 * @param weigth peso del luchador
 * @param height altura del luchador
 * @param universe universo del luchador
 * @param attack ataque del luchador
 * @param defense defensa del luchador
 * @param hp vida del luchador
 */
  constructor(readonly name: string,
  readonly weigth: number,
  readonly height: number,
  protected universe: string,
  protected attack: number,
  protected defense: number,
  protected hp: number) {
    super(name, weigth, height, universe, attack, defense, hp);
  }
  /**
   * funcion que se encarga de decir alguna de las frases famosas de ese universo
   */
  frase() {
    const opcion = Math.floor(Math.floor(Math.random() * (4 - 0)) + 0);
    switch (opcion) {
      case 0:
        console.log('Su poder de pelea está sobre 9000!!');
        break;
      case 1:
        console.log('A veces tenemos que mirar más allá de lo que queremos y hacer lo mejor para todos.');
        break;
      case 2:
        console.log('Prefiero ser un mono descerebrado que un monstruo sin corazón.');
        break;
      case 3:
        console.log('¿Pelear contigo? Vengo a matarte.');
        break;
    }
  }
  /**
   * @returns el tipo del luchador
   */
  getUniverse() {
    return this.universe;
  }
  /**
   * @returns el ataque del luchador
   */
  getAttack() {
    return this.attack;
  }
  /**
   * @returns la defensa del luchador
   */
  getDefense() {
    return this.defense;
  }
  /**
   * @returns la vida del luchador
   */
  getHp() {
    return this.hp;
  }
  /**
   * para cambiarle la vida al luchador
   * @param hp la nueva vida del luchador
   */
  setHp(hp :number) {
    this.hp = hp;
  }
}


