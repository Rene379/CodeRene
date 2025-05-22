/*
**Exercício 20:** Faça um programa que mostre os n primeiros termos da série: 1, 3, 5, 7, ...
*/


function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};


const q1 = input ("informe a quantidade de repetições: ")
const repitaAte = Number(q1);


for (i = 1; i < repitaAte; i++) {
   if (i % 2 == 1) {
    console.log (i)
    }
};



