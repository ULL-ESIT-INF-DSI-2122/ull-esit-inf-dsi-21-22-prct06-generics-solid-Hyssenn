# ull-esit-inf-dsi-21-22-prct06-generics-solid-Hyssenn
## Introducción
## Objetivos
### Ejercicio-1 El combate Definitivo
Extendiendo el ejercicio de la práctica anterior ahora realizaremos un combate con múltiples universos ya no solo de pokemon crearemos una estructura de ficheros donde cada fichero contendrá una única clase:


- En donde en `fighter.ts` se guardará una clase abstracta que será la definición general de todos los combatientes desde donde heredarán todos los combatientes.
- Los ficheros `dragonball.ts` `legendsofheroes.ts` `pokemon.ts` y `starwars.ts` contendran clases hijas de la clase fighter cada una representando un universo como el nombre de los ficheros indica.
- `universeChecker.ts` contendrá una matriz de tipos donde cada universo será mas fuerte, más debil o de igual fuerza contra otro universo.
- `Pokedex.ts` Contendrá una lista de luchadores que podrán ser usados en cualquier momento.
- Por último en `combat.ts` se definirá y se resolverá la lucha entre los distintos combatientes.

#### Clase fighter y Sus clases hijas de distintos universos
```
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
  abstract getAttack() :number;
  abstract getDefense() :number;
  abstract getHp() :number
  abstract setHp(hp :number) :void;
}
```
Esta clase será la superclase de todas las demás y está sera una clase abstracta significando que todas sus hijas tienen que añadir la implementación de todos sus métodos y cogerá todos sus atributos. Sus clases hijas serán: Star wars, DragonBall, LegendsOfHeroes y Pokemon, y para todas ellas se definirán los mismos atributos y métodos.
- Atributos: nombre, peso y altura, ataque, defensa y vida
- Métodos: La frase significativa al universo, conseguir el tipo de universo, conseguir el ataque, conseguir la defensa, conseguir la vida y cambiar la vida.

Entre los métodos cabe destacar el método `frase` pues estamos usando un generador de números aleatorios y para cada universo hemos diseñado una serie de frases, dicho generador producirá un número aleatorio y este será luego el que escoja, mediante un switch, que frase dirá el personaje.

```
frase() {
    const opcion = Math.floor(Math.floor(Math.random() * (4 - 0)) + 0);
    switch (opcion) {
      case 0:
        console.log('Que la fuerza te acompañe');
        break;
      case 1:
        console.log('Su carencia de fe resulta molesta');
        break;
      case 2:
        console.log('Tus ojos pueden engañarte, no confíes en ellos');
        break;
      case 3:
        console.log('¿Puede alguien quitarme de delante a este felpudo con patas?.');
        break;
    }
  }
  ```
**Ejemplo de frases de Star Wars**

### UniverseChecker
Esta clase va a usar la misma lógica usada en la práctica anterior. Usando la ídea de la matriz de tipos en el juego **Pokemon** creare una matriz de tipos usando un enumerado, y en el eje x se pondrá el universo del atacante y en el eje y el universo del defensor. Usando un método que mira los tipos de ambos, atacante y defensor, coge las coordenadas, y de la matriz saca la efectividad. 
```
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
```
la efectividad se podria resumir así:
 - dragonball > star wars
 - legendsOfheroes > pokemon
 - pokemon > dragonball
 - star wars > legendsOfHeroes

 ### Pokedex

 Esta simple clase va a guardar una lista de luchadores para luego poder ser utilizado
```
  constructor() {
    let suicune :Fighter = new Pokemon('Suicune', 187, 2, 'pokemon', 75, 115, 140, 'agua');
    let luxray :Fighter = new Pokemon('Luxray', 42, 1.4, 'pokemon', 120, 79, 120, 'electrico');
    let palpatine :Fighter = new StarWars('Palpatine', 75, 1.72, 'starwars', 150, 60, 120);
    let rean :Fighter = new LegendsofHeroes('Rean', 70, 1.78, 'legendofheroes', 100, 100, 100);
    let goku :Fighter = new Dragonball('Goku', 62, 1.75, 'dragonball', 70, 110, 200);
    this.listPokemons = [suicune, luxray, palpatine, rean, goku];
  }
}
```
Toda la lista de luchadores se guarda como un atributo público para que pueda ser accedido por todo el mundo y sacar el luchador que se quiera.

### Combat

Esta clase no ha cambiado de la práctica anterior aparte de que los tipos ya no son pokemons sino son fighter y el tipo de la matriz no es de tipos sino de universos. Es una clase sin ningún tipo de atributos que solo realiza funcionalidades y dicha funcionalidad se resume en 2 métodos
### Attack
```
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
  ```

Empezaremos mirando la función que calcula el daño, recibe el luchador atacante y el defensor, primero miramos la efectividad entre estos creando un objeto de UniverseChecker y llamando a la función de mira los tipos y luego usamos una función de ataque igual que la anterior: 50* (ataque del atacante / defensa del defensor) * efectividad. Una vez calculado se retorna el daño y se muestra el daño que ha realizado y la efectividad del ataque.
#### Start

```
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
```
La función recibe 2 luchadores y cambia la vida del luchador 2 que es el que se va a defender del ataque, en ese cambio llama a la función de ataque descrita anteriormente y le quita la vida correspondiente al daño retornado por dicha función, si este daño no hace que la vida del defensor llegue a 0 o menos, se llama a la función de manera recursiva haciendo que el luchador 2 que era el que defendía pase ahora a ser el luchador 1 que es el ataca y viceversa, esta función seguirá llamandose recursivamente hasta que uno de los 2 luchadores llegue por debajo de 0 de vida y ahi terminará el combate.

### Ejercicio-3 El cifrado Indescifrable

Nos piden realizar un cifrado en el que usando una palabra, una clave y un alfabeto, encriptemos la palabra usando la clave de tal manera que cada posicion de las letras de la palabra a encriptar se mueven en n posiciones segun la posicion de la letras de la clave. En otras palabras nos piden implementar el cifrado conocido como cifrado Viginere.

Ahora bien la idea para completar este ejercicio esta en la utilización de una sola clase pues en esté se va meter toda la encriptación tanto como para cifrar o para descifrar pues ambas operaciones son realizadas iguales solo que sus operaciones son inversas, siguiendo el principio SOLID de las clases que tengan una única responsabilidad, la cuál esta va a ser la de realizar el proceso de encriptación del cifrado.
###### Constructor
```
constructor(private alfabeto :string) {
    this.alfabeto = alfabeto;
  }
  ```
La idea es en la clase solo guardar el alfabeto pues será lo único inmutable durante el proceso de cifrado y descifrado, las palabras y las claves pueden cambiar pero todas estas tienen que ser sobre un mismo alfabeto, si se quiere otro alfabeto se deberá crear otro objeto de tipo cifrado.
###### Busqueda

```
indexBusqueda(letraPalabra :string, letraClave :string, mode :string ='cifrar' || 'descifrar') :number {
    let indexClave = 0;
    let indexPalabra = 0;
    for (let j = 0; j < this.alfabeto.length; j++) {
      if (letraClave == this.alfabeto[j]) {
        indexClave = j + 1;
      }
      if (letraPalabra == this.alfabeto[j]) {
        indexPalabra = j;
      }
    }
    if (mode == 'cifrar') {
      return indexClave + indexPalabra;
    }
    return indexPalabra - indexClave;
  }
  ```

  Tanto como para descifrar o para cifrar se va a hacer uso de la función de búsqueda esta lo que va a realizar es que pasándole una letra de la palabra y una letra de la clave va a iterar siguiendo el alfabeto hasta que coincidan con la posición de esta, y se van a guardar las posiciones y dependiendo de si estamos cifrando o descifrando se va a sumar o restar respectivamente las posiciones y se devuelve la posición resultado.

  ###### Cifrar y Descifrar
  ```
  cifrar(palabra :string, clave :string) :string {
    let result :string[] = [];
    let k = 0;
    for (let i = 0; i < palabra.length; i++) {
      if (k == clave.length) {
        k = 0;
      }
      result.push(this.alfabeto[this.indexBusqueda(palabra[i], clave[k], 'cifrar') % this.alfabeto.length]);
      k++;
    }
    return result.join('');
  }
  ```
  ```
  descifrar(palabra :string, clave :string) :string {
    let result :string[] = [];
    let k = 0;
    for (let i = 0; i < palabra.length; i++) {
      if (k == clave.length) {
        k = 0;
      }
      result.push(this.alfabeto[(this.indexBusqueda(palabra[i], clave[k], 'descifrar') + this.alfabeto.length  ) % this.alfabeto.length]);
      k++;
    }
    return result.join('');
  }
  ```
  Como se puede observar ambas operaciones son practicamente iguales se crea un array resultado donde iremos metiendo cada resultado de cada letra, un auxiliar k que va a ir iterando por cada letra de la clave y un bucle for i que itere por cada letra de la palabra, se llama a la función de busqueda, usando el módulo del ancho del alfabeto porque no queremos que supere este y una vez terminado de recorrer el resultado que nos quedará es la palabra cifrada