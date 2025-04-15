/* ### 23. Verificação de Número Primo
**Descrição:** Escreva um programa que verifica se um número é primo (divisível apenas por 1 e por ele mesmo).
**Objetivos de aprendizado:** Implementar lógica algorítmica com verificação de divisibilidade.
**Dica:** Um número primo maior que 2 não é divisível por 2. Isso pode ser usado para otimizar a verificação.
*/

const { measureMemory } = require('vm');


function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

let num1 = input("Informe o número: ");
let num2 = Number(num1);



if(num2 % num2 === 0) {
    console.log("Este é um número primo")
} else {
    console.log("Este não é um número primo")
};
