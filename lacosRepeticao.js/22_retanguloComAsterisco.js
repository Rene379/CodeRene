/*
**Exercício 21:** Crie um programa que desenhe um retângulo de asteriscos.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};


let linha = ""
let retangulo = linha

for (i = linha; i < 10; i++) {
    linha += "*"
};

for (i = retangulo; i < 3; i++) {
     retangulo = linha
    console.log(retangulo)
};



