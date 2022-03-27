import {Fighter} from './fighter';
/**
 * Clase que va a definir un luchador del universo de Pokemon
 */
export class Pokemon extends Fighter {
/**
 * El constructor le va a añadir todos los parametros del luchador
 * @param name nombre del luchador
 * @param weigth peso del luchador
 * @param height altura del luchador
 * @param universe universo del luchador
 * @param attack ataque del luchador
 * @param defense defensa del luchador
 * @param hp vida del luchador
 * @param type tipo del pokemon
 */
  constructor(readonly name: string,
  readonly weigth: number,
  readonly height: number,
  protected universe: string,
  protected attack: number,
  protected defense: number,
  protected hp: number,
  protected type :string) {
    super(name, weigth, height, universe, attack, defense, hp);
  }
  /**
   * funcion que se encarga de decir alguna de las frases famosas de ese universo
   */
  frase() {
    const opcion = Math.floor(Math.floor(Math.random() * (4 - 0)) + 0);
    switch (opcion) {
      case 0:
        console.log('No hay nada más fuerte que una amistad forjada en batalla.');
        break;
      case 1:
        console.log('¡El Team Rocket despega de nuevooo!');
        break;
      case 2:
        console.log('La felicidad es una mentira y la verdad siempre dolorosa.');
        break;
      case 3:
        console.log('Hazte con todos.');
        break;
    }
  }
  getType() {
    return this.type;
  }
  /**
   * @returns el tipo del pokemon
   */
  getUniverse() {
    return this.universe;
  }
  /**
   * @returns el ataque del pokemon
   */
  getAttack() {
    return this.attack;
  }
  /**
   * @returns la defensa del pokemon
   */
  getDefense() {
    return this.defense;
  }
  /**
   * @returns la vida del pokemon
   */
  getHp() {
    return this.hp;
  }
  /**
   * para cambiarle la vida al pokemon
   * @param hp la nueva vida del pokemon
   */
  setHp(hp :number) {
    this.hp = hp;
  }
}
