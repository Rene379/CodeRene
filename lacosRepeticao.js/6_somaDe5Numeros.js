/*
**Exercício 6:** Faça um programa que leia 5 números e informe a soma deles.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

const n1 = input ("Insira o número: ");
const numero1 = Number(n1);
const n2 = input ("Insira o número 2: ");
const numero2 = Number(n2);
const n3 = input ("Insira o número 3: ");
const numero3 = Number(n3);
const n4 = input ("Insira o número 4: ");
const numero4 = Number(n4);
const n5 = input ("Insira o número 5: ");
const numero5 = Number(n5);
const somaDosNumeros = (numero1 + numero2 + numero3 + numero4 + numero5);

while (somaDosNumeros > 0) {
    console.log (`${numero1} + ${numero2} + ${numero3} + ${numero4} + ${numero5} = ${somaDosNumeros}`)
    break
};


