/* ### 10. Classificação de Triângulos
**Descrição:** Crie um programa que lê o comprimento de três lados e classifica o triângulo como equilátero (três lados iguais), 
isósceles (dois lados iguais) ou escaleno (todos os lados diferentes). 
**Objetivos de aprendizado:** Aplicar múltiplas condições encadeadas e trabalhar com operadores de igualdade. 
**Dica:** Primeiro verifique se os valores podem realmente formar um triângulo (a soma de dois lados deve ser maior que o terceiro lado).
*/


function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
}

let s1 = input("Informe o primeiro lado: ");
let lado1 = Number(s1);

let s2 = input("Informe o segundo lado: ");
let lado2 = Number(s2);

let s3 = input("Informe o terceiro lado: ");
let lado3 = Number(s3);


if (lado1 == lado2 && lado2 == lado3 && lado1 == lado3) {
    console.log("Este é um triângulo equilátero")
} else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
    console.log("Este triângulo é isósceles")
} else {
    console.log("Este triângulo é escaleno")
};
