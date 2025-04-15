/* ### 12. Verificação de Sinal de Número
**Descrição:** Faça um programa que verifica se um número é positivo, negativo ou zero. 
**Objetivos de aprendizado:** Trabalhar com condições exclusivas e casos especiais. 
**Dica:** O zero é um caso especial que não é nem positivo nem negativo.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

let n = input("Informe o numero: ");
let numero = Number(n);

if (numero < 0) {
    console.log("Este número é negativo")
} else if (numero > 0) {
    console.log("Este número é positivo")
} else {
    console.log("Zero")
};