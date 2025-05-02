/*
### 38. Verificação de Número Palíndromo
**Descrição:** Desenvolva um programa que verifica se um número é palíndromo, ou seja, se lido da esquerda para a direita ou da direita para a esquerda,
representa o mesmo valor (ex: 121, 1331, 54545). **Objetivos de aprendizado:** Manipular dígitos de um número e fazer comparações.
**Dica:** Converta o número para string para facilitar a verificação ou use operações matemáticas para separar os dígitos.
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

if (numeroNormal == numeroInvertido) {
    console.log ("É número palíndromo.")
} else{
    console.log ("Não é palíndromo")
    return
};

