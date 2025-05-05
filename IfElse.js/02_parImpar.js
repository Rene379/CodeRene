/* #2. Verificação de Número Par/Ímpar
 Descrição: Desenvolva um programa que leia um número inteiro e determine se ele é par ou ímpar. 
 Objetivos de aprendizado: Aprender a usar o operador de módulo (%) para verificar o resto da divisão por 2. 
 Dica: Um número é par quando o resto da divisão por 2 é igual a zero (número % 2 === 0).*/


function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

if (number1 % 2 === 0){
    console.log("Este número é par")
} else{
    console.log("Este número é ímpar")
};
