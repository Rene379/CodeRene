/*
**Exercício 11:** Crie um programa que leia 10 números e informe o maior e o menor valor.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};


let maior = 0;
let menor;

for (i = 1; i <= 10; i++) {
    let n1 = input(`Informe o número ${i}: `)
    let numero = Number(n1)


    if (numero > maior) {
        maior = numero
    }
    if (menor === undefined || numero < menor) {
        menor = numero
    }

};

console.log(`O maior valor é: ${maior}, e o menor número é: ${menor}`);


