/*
**Exercício 6:** Faça um programa que leia 5 números e informe a soma deles.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

let somaDosNumeros = 0;

for (i = 1; i <= 5; i++) {
    const n1 = input(`Insira o número ${i}: `);
    let numero = Number(n1);
    somaDosNumeros = somaDosNumeros + numero
}

console.log(`A soma dos números é: ${somaDosNumeros}`)

