/*
### 45. Verificação de Número Perfeito
**Descrição:** Crie um programa que verifica se um número é perfeito.
Um número perfeito é aquele que é igual à soma de seus divisores próprios (excluindo ele mesmo). Exemplo: 6 é perfeito pois 1 + 2 + 3 = 6.
**Objetivos de aprendizado:** Implementar lógica matemática avançada com estruturas condicionais.
**Dica:** Encontre todos os divisores do número e some-os para verificar se é igual ao próprio número.
*/

const { sourceMapsEnabled } = require('process');
const { isDate } = require('util/types');

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};


const n1 = input("Informe o número: ");
const numeroInteiro = Number(n1);
const metade = numeroInteiro / 2;
let y = 1;
let soma = Number();


while (y <= metade) {
    if (numeroInteiro % y == 0) {
        soma = soma + y
        y++
    }  else{
        break
    }
    console.log(`${soma}`)
};

if (soma == numeroInteiro) {
    console.log("Este é um número perfeito.")
} else {
    console.log("Este não é um número perfeito.")
};



