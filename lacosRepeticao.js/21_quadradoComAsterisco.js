/*
**Exercício 21:** Crie um programa que desenhe um quadrado de asteriscos.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};


let linha = ""
let quadrado = linha

for (i = linha; i < 4; i++) {
    linha += "*"
};

for (i = quadrado; i < 4; i++) {
     quadrado = linha
    console.log(quadrado)
};



