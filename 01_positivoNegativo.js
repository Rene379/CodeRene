/* #1. Verificação de Número Positivo/Negativo
Descrição: Crie um programa que solicita ao usuário que digite um número e verifica se ele é positivo ou negativo.
 Considere também o caso especial quando o número é zero. 
 Objetivos de aprendizado: Entender operadores de comparação básicos (> e <) e implementar múltiplas condições com if/else if/else.
 Dica: Lembre-se de converter a entrada do usuário para um número usando funções como parseInt() ou parseFloat().*/

 function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

let num1 = input("digite um número");
let number1 = Number(num1);

if (number1 > 0){
    console.log("Este número é positivo")
} else if (number1 == 0){
    console.log ("Zero")
} else{
    console.log("Este número é negativo")
};