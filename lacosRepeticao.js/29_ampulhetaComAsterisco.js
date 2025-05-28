/*
**Exercício 29:** Faça um programa que desenhe uma ampulhetaBaixo com asteriscos.
**Resultado:**
*********
 *******
  *****
   ***
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



for (i = 5; i >= 1; i--) {
    let espaco = " ";
    let asterisco = " ";

    for (e = 1; e <= 5 - i; e++) {
        espaco += " "
    } for (a = 1; a <= 2 * i - 1; a++) {
        asterisco += "*"
    }
    let ampulhetaCima = (espaco + asterisco);
    console.log(ampulhetaCima)
} for (i = 2; i <= 5; i++) {
    espaco = " ";
    asterisco = " ";
    for (e = 1; e <= 5 - i; e++) {
        espaco += " "
    } for (a = 1; a <= 2 * i - 1; a++) {
        asterisco += "*"
    }
    let ampulhetaBaixo = (espaco + asterisco);
    console.log(ampulhetaBaixo)
};



