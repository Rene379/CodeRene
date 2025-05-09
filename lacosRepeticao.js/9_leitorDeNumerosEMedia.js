/*
**Exercício 9:** Faça um programa que leia números até que o usuário digite 0 e então mostre a média dos valores.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

let n1 = input ("Informe o número: ");
let numero = Number (n1);   
let contador = 0;
let soma = 0;

while (numero != 0) {
    n1 = input ("Informe o número: ")
    numero = Number (n1)
    contador++
    soma = soma + numero
};

const media = (soma / contador);
Math.round (media)
console.log (`A média é: ${media}`);


