const prompt = require("prompt-sync")();

// Leia os três números

var n1 = parseInt(prompt('Digite o numero 1: '));
var n2 = parseInt(prompt('Digite o numero 2: '));
var n3 = parseInt(prompt('Digite o numero 3: '));

// Calcule a soma e a média
var soma = (n1+n2+n3);
var media = (soma/3);

// Mostre na tela o valor da soma e média

console.log('A soma é', soma);

console.log('A média é:', media);


