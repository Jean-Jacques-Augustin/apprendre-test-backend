const assert = require('assert');
const {add , sub} = require('../src/app');
const {expect} = require('chai');


/**
 * *****************************************************************************************************
 * Ceci est un exemple de test de logique en js
 * Apres ceci, on est capable de faire n'importe quel test unitaire; c'est à dire du cote back-end en js
 * *****************************************************************************************************
 * 
 */

describe('Devrait capable de de jouer l\'addition', () => {
     it('', () => {
          const result = add(1, 2);
          expect(result).to.eq(3);
     });

     it('Devrait être capable de gérer 1 numéro', () => {
          const result = add(2);
          expect(result).to.be.eq(2);
     });

     it('Devrait être capable de gérer l\'ajout de 1 nombre par un zero', () => {
          const result = add();
          expect(result).to.be.eq(0);
     });

     it('Devrait être capable de gerer les strings', () => {
          const result = sub('1', 'test');
          expect(result).to.be.eq(0);
     });
});