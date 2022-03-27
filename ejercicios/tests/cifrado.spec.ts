import 'mocha';
import {expect} from 'chai';
import {Cifrado} from '../src/ejercicio-3/cifrado';

describe('Test Cifrado', () => {
  let prueba = new Cifrado('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');
  it('Cifrado de HOLASOYUNAPRUEBA usando la clave CLAVE ', () => {
    expect(prueba.cifrar('HOLASOYUNAPRUEBA', 'CLAVE')).to.be.eq('KAMWXRKVJFSDVAGD');
  });
  it('Descifrado de KAMWXRKVJFSDVAGD usando la clave CLAVE', () => {
    expect(prueba.descifrar('KAMWXRKVJFSDVAGD', 'CLAVE')).to.be.eq('HOLASOYUNAPRUEBA');
  });
  it('Busqueda letra H clave letra C', () => {
    expect(prueba.indexBusqueda('H', 'C', 'cifrar')).to.be.equal(10);
  });
});
