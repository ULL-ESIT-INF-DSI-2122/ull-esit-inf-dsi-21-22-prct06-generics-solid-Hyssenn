import {ArithmeticableInterface} from './arithmeticable';

export class ArithmeticableCollection<T> implements <ArithmeticableInterface> {
  constructor(private elements :T[]) {
    this.elements = elements;
  }
  addArithmeticable(elemento :T) {
    this.elements.push(elemento);
  }
  getArithmeticable(index :number) :T {
    return this.elements[index];
  }
  getNumberofArithmeticable() {
    return this.elements.length;
  }

}
