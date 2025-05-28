/*
**Exercício 28:** Desenvolva um código que desenhe um padrão de xadrez 8x8 usando "X" e "O".
*/


function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};



for (let i = 0; i < 8; i++) {
    let xadrez = " ";
    for (let j = 0; j < 8; j++) {
        if ((i +j) % 2 === 0) {
            xadrez += "x"
        } else {
            xadrez += "o"
        }
    }
    console.log(xadrez)
} 