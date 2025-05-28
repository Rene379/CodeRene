/*
**Exercício 30:** Crie um programa que desenhe um losango simples.
**Resultado:**

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

for (i = 1; i <= 5; i++) {
    let espaco = " ";
    let asterisco = " ";
    for (e = 1; e <= 5 - i; e++) {
        espaco += " "
    } for (a = 1; a <= 2 * i - 1; a++) {
        asterisco += "*"
    }
    let cima = (espaco + asterisco);
    console.log(cima)
} for (i = 4; i >= 1; i--) {
    espaco = " ";
    asterisco = " ";

    for (e = 1; e <= 5 - i; e++) {
        espaco += " "
    } for (a = 1; a <= 2 * i - 1; a++) {
        asterisco += "*"
    }
    let baixo = (espaco + asterisco);
    console.log(baixo)
}; 