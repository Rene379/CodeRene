/*
### 36. Identificação do Menor Número
**Descrição:** Faça um programa que recebe três números e determina qual é o menor entre eles.
**Objetivos de aprendizado:** Implementar comparações encadeadas de forma eficiente.
**Dica:** Compare dois números primeiro, e depois compare o menor deles com o terceiro número.
###
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

const n1 = input("Informe o número: ");
const numero1 = Number(n1);
const n2 = input("Informe o número: ");
const numero2 = Number(n2);
const n3 = input("Informe o número: ");
const numero3 = Number(n3);

if (numero1 < numero2 && numero1 < numero3) {
    console.log(`O menor número é: ${numero1}`)
} else if (numero2 < numero1 && numero2 < numero3) {
    console.log(`O menor número é: ${numero2}`)
} else {
    console.log(`O menor número é: ${numero3}`)
};