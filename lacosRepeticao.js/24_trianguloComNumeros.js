/*
**Exercício 24:** Crie um programa que desenhe um numeros retângulo com números.
1
12
123
1234
12345
*/


function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};


let numeros = 5;

for (i = 1; i <= numeros; i++) {
    let triangulo = " "
    for (t = 1; t <= i; t++) {
    triangulo += t + " "
    }
    console.log(triangulo)
};






