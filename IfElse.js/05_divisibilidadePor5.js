/*### 5. Verificação de Divisibilidade por 5
**Descrição:** Desenvolva um programa que verifica se um número é divisível por 5 (o resto da divisão por 5 é zero). 
**Objetivos de aprendizado:** Usar o operador de módulo (%) para verificar divisibilidade. 
**Dica:** Experimente também verificar a divisibilidade por outros números, como 3 ou 7.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
}

let num1 = input("digite o número: ");
let number1 = Number(num1);

if (number1 % 5 === 0){
    console.log("O número é divisível por 5")
} else{
    console.log ("O número não é divisível por 5")
};


if (number1 % 3 === 0){
    console.log("O número é divisível por 3")
} else{
    console.log ("O número não é divisível por 3")
};

if (number1 % 7 === 0){
    console.log("O número é divisível por 7")
} else{
    console.log ("O número não é divisível por 7")
};