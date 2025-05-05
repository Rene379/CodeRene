/*
### 43. Verificação de Triângulo Retângulo
**Descrição:** Escreva um programa que verifica se três pontos no plano cartesiano formam um triângulo retângulo.
Use o teorema de Pitágoras para verificar se um dos ângulos é reto.
**Objetivos de aprendizado:** Aplicar conceitos geométricos em estruturas condicionais.
**Dica:** Calcule as distâncias entre os três pontos (lados do triângulo) e verifique se a soma dos quadrados de dois lados é igual ao quadrado do terceiro lado.
*/

const { isDate } = require('util/types');

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

const numA = input("Insira o lado A: ");
const ladoA = Number(numA);
const numB = input("Insira o lado B: ");
const ladoB = Number(numB);
const numC = input("Insira o lado C: ");
const ladoC = Number(numC);

if ((ladoA**2 + ladoB**2 == ladoC**2) || (ladoA ** 2 + ladoC ** 2 == ladoB **2) || (ladoB ** 2 + ladoC ** 2 == ladoA **2)) {
    console.log("É um triângulo retângulo.")
} else {
    console.log("Não é um triângulo retângulo.")
};
