/**
 * **********************************************************************************
 * Create a function that takes two numbers as arguments and return their sum.
 * Exemple pour tester la logique dans une fonction en js
 * La logiques est un ensemble de regles qui permettent de faire des calculs
 * Et c'est la base de la programmation informatique
 * A partir de la logique on peut faire des programmes et le tester
 * C'est exemple 1  est un exemple de logique et à partir de la on peut relaliser des test unitaire
 * dans une application plus complexe
 * **********************************************************************************
 * 
 */


const add = (a = 0, b = 0) => {
     if (typeof a !== 'number' || typeof b !== 'number') {
          return 0
     }
     return a + b;
};

const sub = (a = 0, b = 0) => {
     if (typeof a !== 'number' || typeof b !== 'number') {
          return 0
     }
     return a - b;
};

module.exports = {add , sub};