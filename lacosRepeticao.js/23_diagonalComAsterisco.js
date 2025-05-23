/*
**Exercício 23:** Faça um programa que desenhe uma linha diagonal com asteriscos.
*/

const { AsyncResource } = require('async_hooks');


function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

let espaco = " ";
let asterisco = " * ";

for (i = espaco; i <= 5; i++) {
    espaco += " "
    asterisco
    console.log (espaco+asterisco)
    
};


