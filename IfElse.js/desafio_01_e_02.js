/* 
 #1. Verificação de Número Positivo/Negativo
Descrição: Crie um programa que solicita ao usuário que digite um número e verifica se ele é positivo ou negativo.
 Considere também o caso especial quando o número é zero. 
 Objetivos de aprendizado: Entender operadores de comparação básicos (> e <) e implementar múltiplas condições com if/else if/else.
 Dica: Lembre-se de converter a entrada do usuário para um número usando funções como parseInt() ou parseFloat().
 #2. Verificação de Número Par/Ímpar
 Descrição: Desenvolva um programa que leia um número inteiro e determine se ele é par ou ímpar. 
 Objetivos de aprendizado: Aprender a usar o operador de módulo (%) para verificar o resto da divisão por 2. 
 Dica: Um número é par quando o resto da divisão por 2 é igual a zero (número % 2 === 0).
 */

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
}

let num1 = input("digite um número");
let number1 = Number(num1);

if (number1 > 0){
    console.log("Este número é positivo")
} else if (number1 == 0){
    console.log ("Zero")
} else{
    console.log("Este número é negativo")
};

if (number1 % 2 === 0){
    console.log("Este número é par")
} else{
    console.log("Este número é ímpar")
};


if (number1 >= 0 && number1 %2 === 0){
    console.log ("Este número é par e positivo")
} else if (number1 < 0 && number1 %2 === 0){
    console.log ("Este número é par e negativo")
} else if(number1 >= 0 && number1 %2 === 1) {
    console.log ("Este número é ímpar e positivo")
} else {
    console.log( "Este número é ímpar e negativo")
}