/* ### 18. Determinação do Dia da Semana
**Descrição:** Desenvolva um programa que recebe um número de 1 a 7 e retorna o dia da semana correspondente (1 = Domingo, 2 = Segunda, etc.).
**Objetivos de aprendizado:** Implementar uma estrutura condicional com múltiplas opções.
**Dica:** Este exercício também pode ser resolvido com switch/case, mas tente usar apenas if/else para praticar.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

let n = input("Informe o dia: ");
let dia = Number(n);



if (dia == 1){
    console.log("Hoje é Domingo")
} else if (dia == 2){
    console.log("Hoje é Segunda-feira")
} else if (dia == 3){
    console.log("Hoje é Terça-feira")
} else if (dia == 4){
    console.log("Hoje é Quarta-feira")
} else if (dia == 5){
    console.log("Hoje é Quinta-feira")
} else if (dia == 6){
    console.log("Hoje é Sexta-feira")
} else if (dia == 7){
    console.log("Hoje é sábado")
} else {
    console.log("Número inválido")
}; 