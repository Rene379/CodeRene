/*
**Exercício 15:** Desenvolva um código que inverta um número. Ex: 123 vira 321.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

const n1 = input("Informe o número: ");
const numeroNormal = (n1);
const numeroInvertido = numeroNormal.split("").reverse().join("");

console.log(`O número invertido de ${numeroNormal} é: ${numeroInvertido}`);



