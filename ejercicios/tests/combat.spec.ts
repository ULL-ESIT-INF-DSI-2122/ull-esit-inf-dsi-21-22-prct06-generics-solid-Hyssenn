import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {Combat} from '../src/ejercicio-1/combat';
import {Fighter} from '../src/ejercicio-1/fighter';
import {StarWars} from '../src/ejercicio-1/starWars';
import {LegendsofHeroes} from '../src/ejercicio-1/legendsOfHeroes';
import {Dragonball} from '../src/ejercicio-1/dragonball';
describe('Combat tests', () => {
  let suicune :Fighter = new Pokemon('Suicune', 187, 2, 'pokemon', 75, 115, 140, 'agua');
  let luxray :Fighter = new Pokemon('Luxray', 42, 1.4, 'pokemon', 120, 79, 120, 'electrico');
  let palpatine :Fighter = new StarWars('Palpatine', 75, 1.72, 'starwars', 150, 60, 120);
  let rean :Fighter = new LegendsofHeroes('Rean', 70, 1.78, 'legendsofheroes', 100, 100, 100);
  let goku :Fighter = new Dragonball('Goku', 62, 1.75, 'dragonball', 70, 110, 200);
  let combate :Combat = new Combat;
  it('Combate 1 Rean vs Goku: Gana Goku', () => {
    expect(combate.start(rean, goku)).to.be.eq('Goku');
  });
  it('Combate 2 Palpatine vs Luxray: Gana luxray', () => {
    expect(combate.start(palpatine, luxray)).to.be.eq('Palpatine');
  });
  it('Combate 3 Rean vs Palpatine: Gana Palpatine', () => {
    expect(combate.start(palpatine, rean)).to.be.eq('Palpatine');
  });
  it('Combate 4 goku vs Palpatine: Gana Goku', () => {
    expect(combate.start(goku, goku)).to.be.eq('Goku');
  });
  it('Combate 5 luxray vs Goku: Gana luxray', () => {
    expect(combate.start(luxray, luxray)).to.be.eq('Luxray');
  });
  it('Combate 6 palpatine vs Luxray: Gana Palpatine', () => {
    expect(combate.start(palpatine, palpatine)).to.be.eq('Palpatine');
  });
});
