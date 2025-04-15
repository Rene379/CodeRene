/* ### 8. Verificação de Intervalo Numérico
**Descrição:** Desenvolva um programa que verifica se um número está dentro do intervalo de 10 a 20 (inclusive).
**Objetivos de aprendizado:** Combinar condições com operadores lógicos AND (&&) ou OR (||). 
**Dica:** A condição pode ser escrita como: (numero >= 10 && numero <= 20).
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
}

let num1 = input("digite o número: ");
let number1 = Number(num1);

if (number1 >= 10 && number1 <= 20) {
    console.log("Está dentro do intervalo")
} else {
    console.log ("Está fora do intervalo")
};

