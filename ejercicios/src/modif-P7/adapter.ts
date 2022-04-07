import {ImperialLength} from './imperialLength';
import {MetricLength} from './metricLength';
/**
 * clase que cambia de sistema imperial a metrico
 */
class AdapterLenght extends ImperialLength {
/**
 * constructor que va a utilizar un objeto de la clase metrico
 * @param service Un objeto de la clase metrico
 */
  constructor(private service :MetricLength, number :number) {
    super(number);
  }
  /**
   * funcion que convierte dependiendo del formato en el que este de imperial a metrico
   */
  convert() {
    switch (this.format) {
      case 'feet':
        this.service.setNum(this.imperialNum * 3.2808);
        this.service.setFormat('metro');
        break;
      case 'yards':
        this.service.setNum(this.imperialNum * 1.0936);
        this.service.setFormat('metro');
        break;
      case 'inches':
        this.service.setNum(this.imperialNum * 0.39370);
        this.service.setFormat('centimetro');
        break;
      case 'miles':
        this.service.setNum(this.imperialNum * 0.62137);
        this.service.setFormat('kilometro');
    }
  }
  /**
   * funcion que muestra por pantalla el numero y su unidad
   */
  print() {
    console.log(`el numero es: ${this.service.getNum()} ${this.service.getFormat()}`);
  }
}

const imperial = new ImperialLength(5);
imperial.convert('miles');
const metric = new MetricLength(5);

const adapter = new AdapterLenght(metric, 5);
adapter.print();

