/*
### 47. Sistema de Alerta de Poluição
**Descrição:** Escreva um programa que calcula o índice de poluição e emite alertas apropriados: aceitável (até 0.25),
alerta para indústrias do grupo 1 (0.26-0.3), alerta para indústrias dos grupos 1 e 2 (0.31-0.4), alerta para todas as indústrias (0.41-0.5),
alerta geral e suspensão de atividades (acima de 0.5). **Objetivos de aprendizado:** Implementar múltiplos níveis de alerta com base em intervalos.
**Dica:** Estruture as condições do maior índice para o menor para evitar duplicações.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

let poluicao = input("Informe o indice de poluição: ");
let indice = Number(poluicao).toFixed(2);


if (indice <= 0.25){
    console.log("Índice aceitável.")
} else if (indice > 0.26 && indice < 0.30) {
    console.log("Alerta para as indústrias do grupo !!!")
} else if (indice > 0.31 && indice < 0.40) {
    console.log("Alerta para as indústrias dos grupos !!!")
} else if (indice > 0.41 && indice <= 0.50) {
    console.log("Alerta para todas as indústrias !!")
} else {
    console.log("Alerta geral !!! Atividades suspensas.")
};

