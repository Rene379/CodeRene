/*
**Exercício 8:** Crie um programa que conte quantos números pares existem entre 1 e 50.
*/


function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};


let numerosPares = 50;

for (let i = 1; i <= numerosPares; i++) {
    if (i % 2 == 0) {
        console.log(`Os números pares são ${i}`)
    }
};
