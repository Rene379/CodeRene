/*
**Exercício 7:** Desenvolva um código que calcule o fatorial de um número fornecido pelo usuário.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};



const n1 = input("Informe o número: ")
let fatorial = Number(n1);
let i = n1 - 1;

while (i != 0) {
    fatorial *= i
    i--
};
console.log(`O resultado fatorial de ${n1} é: ${fatorial}`)

