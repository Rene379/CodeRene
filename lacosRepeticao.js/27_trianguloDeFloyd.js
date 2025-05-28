/*
**Exercício 27:** Crie um programa que desenhe um triângulo de Floyd.
**Resultado:**
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 
*/


function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};


let linhas = 5;
let numeros = 1;

for (i = 1; i <= linhas; i++) {
    let trianguloFloyd = " "
    for (t = 1; t <= i; t++) {
    trianguloFloyd += numeros + " "
    numeros++
    }
    console.log(trianguloFloyd)
};
