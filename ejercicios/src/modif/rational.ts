import {ArithmeticableInterface} from './arithmeticable';
import {ArithmeticableCollection} from './arithmeticableCollection';
class Rational implements ArithmeticableInterface<Rational> {
  constructor(private numerador :number, private denominador :number) {
    this.numerador = numerador;
    this.denominador = denominador;
  }
  add(a: Rational) {
    if (this.denominador === a.denominador) {
      return new Rational(this.numerador + a.numerador, this.denominador);
    }
    return new Rational(this.numerador * a.denominador + a.numerador * this.denominador,
        this.denominador * a.denominador);
  }
  substract(a: Rational) {
    if (this.denominador === a.denominador) {
      return new Rational(this.numerador - a.numerador, this.denominador);
    }
    return new Rational(this.numerador * a.denominador - a.numerador * this.denominador,
        this.denominador * a.denominador);
  }
  multiply(a: Rational) {
    return new Rational(this.numerador * a.numerador,
        this.denominador * a.denominador);
  }
  divide(a: Rational) {
    return new Rational(this.numerador * a.denominador,
        a.numerador * this.denominador);
  }
  print() {
    console.log(`${this.numerador} / ${this.denominador}`);
  }
}

let a = new Rational(5, 5);
let b = new Rational(5, 5);

a.add(b).print();
a.substract(b).print();
a.multiply(b).print();
a.divide(b).print();
