/*
**Exercício 2:** Faça um programa que imprima os números pares de 0 a 20.
*/


function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
}

for ( i = 0;i <= 20; i++) {
    if (i % 2 == 0)
    console.log (`Os números são: ${i}`)
};
