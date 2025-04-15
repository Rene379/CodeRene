/* ### 11. Conversão de Notas em Conceitos
**Descrição:** Desenvolva um programa que converte notas numéricas (de 0 a 100) em conceitos: A (90-100), B (80-89), C (70-79), D (60-69), F (0-59). 
**Objetivos de aprendizado:
** Implementar múltiplas condições em cascata com if/else if/else. **Dica:** Comece verificando do maior intervalo para o menor para simplificar a lógica.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
}

let aproveitamento = input("Informe o aproveitamento: ");
let nota = Number(aproveitamento);

if (nota >= 90 && nota <= 100){
    console.log("Parabéns! seu aproveitamento é A")
} else if (nota >= 80 && nota < 90 ) {
    console.log("Seu aproveitamento é B")
} else if (nota >= 70 && nota < 80 ) {
    console.log("Seu aproveitamento é C")
} else if (nota >= 60 && nota < 70 ) {
    console.log("Seu aproveitamento é D")
} else {
    console.log ("Que pena, seu aproveitamento foi F")
};