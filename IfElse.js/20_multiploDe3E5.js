/* ### 20. Verificação de Múltiplo de 3 e 5
**Descrição:** Faça um programa que verifica se um número é múltiplo de 3 e 5 ao mesmo tempo.
Esses números são frequentemente usados no desafio "FizzBuzz".
**Objetivos de aprendizado:** Combinar verificações de divisibilidade com operadores lógicos.
**Dica:** Um número é múltiplo de 3 e 5 se for divisível por 15.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

let n1 = input("Informe o número: ");
let multi = Number (n1);

if (multi % 15 == 0) {
    console.log ("É múltiplo de 3 e 5")
}   else {
    console.log("Não é míltiplo de 3 e 5")
}; 

