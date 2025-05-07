/*
**Exercício 3:** Crie um programa que conte de 10 até 0 (ordem decrescente).
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
}

for (i = 10; i >=0; i = i -1) {
    console.log (`Os números são: ${i}`)
};
