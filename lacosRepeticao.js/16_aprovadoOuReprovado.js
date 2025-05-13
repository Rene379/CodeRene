/*
**Exercício 16:** Crie um programa que leia 10 notas e calcule a média, informando se o aluno está aprovado (média >= 7) ou reprovado.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};


let nota = Number();
let quantasNotas = 1;
let somaDasnotas = undefined;
const media = somaDasnotas / quantasNotas;

for (nota = 0; nota < 10; nota++) {
    let nota = input(`Informe a nota ${quantasNotas}: `)
    quantasNotas++;
    somaDasnotas = somaDasnotas + nota;
    
};

if (media >= 7 && media <= 10) {
    console.log(`Sua média foi de: ${media}. Aprovado! Parabéns!`)
} else {
    console.log(`Sua média foi de: ${media}. Reprovado. Na próxima você consegue!`)
};