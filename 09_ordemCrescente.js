/* ### 9. Verificação de Ordem Crescente
**Descrição:** Escreva um programa que recebe três números e verifica se estão em ordem crescente. 
**Objetivos de aprendizado:** Usar múltiplas comparações com operadores lógicos. 
**Dica:** A ordem é crescente se: a < b < c, ou seja, a < b && b < c.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

let num1 = input("Informe o primeiro número: ");
let numero1 = Number(num1);

let num2 = input("Informe o segundo número: ");
let numero2 = Number(num2);

let num3 = input("Informe o terceiro número: ");
let numero3 = Number(num3);


if (numero1 < numero2 && numero2 < numero3){
    console.log ("Esta é uma ordem crescente")
} else{
    console.log("Esta não é uma ordem crescente")
};

