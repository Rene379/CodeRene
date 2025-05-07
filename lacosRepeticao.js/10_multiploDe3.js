/*
**Exercício 10:** Desenvolva um código que mostre os múltiplos de 3 entre 1 e 30.
*/


function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};


let multiploDe3 = 30;

for (let i = 3; i <= multiploDe3; i++) {
    if (i % 3 == 0) {
        console.log(`Os números multiplos de ${i} são ${i}`)
    }
};