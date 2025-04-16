/*### 13. Determinação de Estação do Ano
**Descrição:** Crie um programa que recebe o mês (1-12) e o hemisfério ('N' para Norte, 'S' para Sul) e determina a estação do ano. 
**Objetivos de aprendizado:** Combinar múltiplas variáveis em estruturas condicionais complexas. 
**Dica:** As estações são invertidas nos hemisférios norte e sul, e os meses de transição podem pertencer a duas estações.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

