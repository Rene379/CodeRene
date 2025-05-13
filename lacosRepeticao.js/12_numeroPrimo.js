/*
**Exercício 12:** Desenvolva um código que verifique se um número é primo.
*/


function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};


const n1 = input ("Digite um número: ")
const numero = Number (n1)

for (i = 2; i <= Math.sqrt(numero); i++){
    if (numero % i == 0) {
        console.log("Não é um número primo")
    } else {
        console.log("É um número primo")
    } 
    return
};