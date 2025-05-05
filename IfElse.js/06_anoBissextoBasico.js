/* ### 6. Verificação de Ano Bissexto (Básico)
**Descrição:** Crie um programa que verifica se um ano é bissexto usando a regra básica: anos divisíveis por 4 são bissextos. 
**Objetivos de aprendizado:** Aplicar o operador de módulo em um contexto prático.
**Dica:** Esta é uma versão simplificada. A regra completa para anos bissextos é mais complexa e será abordada no exercício 24.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

let year = input("Informe o ano: ");
let ano = Number(year);

if (ano % 4 == 0){
    console.log("Este é um ano bissexto")
} else {
    console.log("Este não é um ano bissexto")
};
