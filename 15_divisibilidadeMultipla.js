/* ### 15. Verificação de Divisibilidade Múltipla
**Descrição:** Escreva um programa que determina se um número é divisível por 2, por 3, por ambos ou por nenhum deles. 
**Objetivos de aprendizado:** Combinar verificações de divisibilidade com operadores lógicos. 
**Dica:** Um número é divisível por 2 e 3 ao mesmo tempo se for divisível por 6.
### */


function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};


let n1 = input("Informe o número: ");
let numero = Number(n1);

if (numero == 0) {
    console.log("não é possível dividir por zero")
} else {
    if (numero % 2 == 0 && numero % 3 == 0) {
        console.log("O número é divisível por ambos")
    } else if (numero % 2 == 0 || numero % 3 == 0) {
        console.log("O número é diviśivel apenas por um deles")
    } else {
        console.log("O número não é divisível por nenhum deles.")
    }
};