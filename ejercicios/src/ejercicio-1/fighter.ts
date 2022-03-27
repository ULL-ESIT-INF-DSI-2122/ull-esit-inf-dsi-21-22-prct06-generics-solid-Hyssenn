export abstract class Fighter {
  constructor(readonly name: string,
  readonly weigth: number,
  readonly height: number,
  protected universe: string,
  protected attack: number,
  protected defense: number,
  protected hp: number) {}

  abstract frase() :void;

  abstract getUniverse() :string;
  /**
   * @returns el ataque del luchador
   */
  abstract getAttack() :number;
  /**
   * @returns la defensa del luchador
   */
  abstract getDefense() :number;
  /**
   * @returns la vida del luchador
   */
  abstract getHp() :number
  /**
   * para cambiarle la vida al luchador
   * @param hp la nueva vida del luchador
   */
  abstract setHp(hp :number) :void;
}
