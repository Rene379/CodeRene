/*
**Exercício 25:** Desenvolva um código que desenhe um triângulo retângulo invertido com asteriscos.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};


for (i = 5; i >= 1; i--) {
    let trianguloInvertido = " "
    for (t = 1; t <= i; t++) {
        trianguloInvertido += "*"
    }
    console.log(trianguloInvertido)
};


