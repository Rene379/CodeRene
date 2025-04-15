/* ### 4. Comparação de Dois Números

**Descrição:** Escreva um programa que lê dois números e mostra qual é o maior, ou se são iguais. **Objetivos de aprendizado:
** Trabalhar com múltiplas condições e operadores de comparação. 
**Dica:** Não esqueça de considerar o caso em que os números são iguais.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
}

let num1 = input("digite o primeiro número: ");
let number1 = Number(num1);

let num2 = input("digite o segundo número: ");
let number2 = Number(num2);

if (number1 > number2) {
    console.log("O primeiro número é maior")
} else if (number1 == number2){
    console.log("Os números são iguais")
} else {
    console.log("O segundo número é maior")
};
