/*
**Exercício 4:** Desenvolva um programa que calcule a soma dos números de 1 a 100.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
}


let soma = 0;

for (i = 1; i <= 100; i++) {
    soma = (soma + i)  
};

console.log(`A soma dos números é: ${soma}`);