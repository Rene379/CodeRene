/*
**Exercício 1:** Faça um programa que imprima os números de 1 a 10.
*/




function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
}

for ( i = 0; i <= 10; i++) {
    console.log (`Os números são: ${i}`)
};



