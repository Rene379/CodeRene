/*
### 46. Verificação de Formação de Retângulo
**Descrição:** Desenvolva um programa que verifica se quatro pontos no plano cartesiano podem formar um retângulo.
Um retângulo tem ângulos de 90 graus e lados opostos paralelos e iguais.
**Objetivos de aprendizado:** Aplicar geometria analítica em estruturas condicionais.
**Dica:** Calcule as distâncias entre os pontos e verifique se formam dois pares de lados iguais e perpendiculares entre si.
### 
*/


const { isDate } = require('util/types');

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};
const a1 = input("Informe o ângulo: ")
const angulo = Number(a1)
const s1 = input ("Insira o lado 1: ");
const lado1 = Number (s1);
const s2 = input ("Insira o lado 2: ");
const lado2 = Number (s2);
const s3 = input ("Insira o lado 3: ");
const lado3 = Number (s3);
const s4 = input ("Insira o lado 4: ");
const lado4 = Number (s4);

if (lado1 == lado2 && lado3 == lado4 && angulo == 90) {
    console.log("Os lados formam um retângulo.")
} else if (lado1 == lado3 && lado2 == lado4 && angulo == 90) {
    console.log("Os lados formam um retângulo.")
} else if (lado1 == lado4 && lado2 == lado3 && angulo == 90) {
    console.log("Os lados formam um retângulo.")
} else { 
    console.log("Os lados não formam um retângulo.")
};


