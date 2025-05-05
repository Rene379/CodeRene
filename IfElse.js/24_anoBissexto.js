/* 
### 24. Verificação de Ano Bissexto (Completo)
**Descrição:** Faça um programa que verifica se um ano é bissexto usando as regras completas: anos divisíveis por 4 são bissextos, 
exceto anos divisíveis por 100, a menos que também sejam divisíveis por 400. **Objetivos de aprendizado:**
Aplicar condições lógicas complexas com múltiplas regras.
**Dica:** Por exemplo, 1900 não é bissexto (divisível por 100), mas 2000 é (divisível por 400). 
*/

const { measureMemory } = require('vm');


function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

let y1 = input("Informe o ano: ");
let year = Number(y1);


if (year% 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
    console.log("Este é um ano bissexto")
} else {
    console.log("Este não é um ano bissexto")
};

