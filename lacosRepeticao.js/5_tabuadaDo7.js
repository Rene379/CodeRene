/*
**Exercício 5:** Crie um programa que imprima a tabuada do 7.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};



const sete = 7;

for (let i = 1; i <  11; i++) {
    console.log(`${sete} X ${i} = ${(sete * i)}`)
};

