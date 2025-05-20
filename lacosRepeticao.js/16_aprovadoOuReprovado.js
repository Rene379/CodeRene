/*
**Exercício 16:** Crie um programa que leia 10 notas e calcule a média, informando se o aluno está aprovado (média >= 7) ou reprovado.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};



let quantasNotas = 1;
let somaDasnotas = 0;
let media = 0;

for (i = 1; i <= 10; i++) {
    let nota = input(`Informe a nota ${quantasNotas}: `)
    quantasNotas++;
    somaDasnotas = nota += nota;
    media = (somaDasnotas / quantasNotas);
};

if (media >= 7 && media <= 10) {
    console.log(`Sua média foi de: ${media}. Aprovado! Parabéns!`)
} else {
    console.log(`Sua média foi de: ${media}. Reprovado. Na próxima você consegue!`)
}

