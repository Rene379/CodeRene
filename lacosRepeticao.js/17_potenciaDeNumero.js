/*
**Exercício 17:** Faça um programa que calcule a e de um número (base^expoente) usando laços de repetição.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};



const b1 = input ("Informe o número base: ")
const base = Number(b1);

const exp = input ("Informe o expoente: ")
const potencia = Number (exp);


for (i = base; i <= potencia; i++) {
    const numeroPotencia = Math.pow (base, potencia)
    console.log(`O número ${base}, elevado a ${potencia} é igual a: ${numeroPotencia}`)
    return
}; 
