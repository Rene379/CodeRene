/*
**Exercício 13:** Faça um programa que imprima os primeiros 15 números da sequência Fibonacci.
*/


function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};


let quanti = input ("Informe a quantidade de números: ")
let quantidadeNumeros = Number(quanti); 

let elemento1 = 0;
let elemento2 = 1;
let proximoElemento = 0; 

for (i = 2; i <= quantidadeNumeros; i++) {
    proximoElemento = elemento1 + elemento2;
    console.log(proximoElemento)
    elemento1 = elemento2
    elemento2 = proximoElemento
    console.log (proximoElemento);
};
