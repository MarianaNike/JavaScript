const prompt = require('prompt-sync')();

alturas = []

// Implementar a entrada de dados

for (var i = 0; i <= 9; i++) {
  a = parseFloat(prompt("Digite a sua altura: "));
  alturas.push(a);
}

// Implementar o processamento de dados

for (var i = 0; i <=9; i++) {
  var cont = 0;
  // Fazer for dentro de for
  for (var j = 0; j <=9; j++) {
    if (alturas[i]>alturas[j]) {
      cont++;
    }
  }

// Implementar a saída de dados
  
  console.log("aluno " +i, "maior que " +cont, "aluno(s) ");
}