/*
**Exercício 26:** Faça um programa que desenhe uma pirâmide simples de asteriscos.
    *
   ***
  *****
 *******
*********
*/


function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

let linhas = 5;

for (i = 1; i <= linhas; i++) {
    let espaco = " ";
    let asterisco = " ";

    for (e = 1; e <= linhas - i; e++) {
        espaco += " "
    } for (a = 1; a <= 2 * i - 1; a++) {
        asterisco += "*"
    }
    let piramideComAsterisco = (espaco + asterisco);
    console.log(piramideComAsterisco)
};



