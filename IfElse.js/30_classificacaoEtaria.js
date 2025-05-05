/*
### 30. Classificação Etária de Filmes
**Descrição:** Desenvolva um programa que determina a classificação de um filme com base na idade recomendada:
Livre (todas as idades), 10+ (dez anos ou mais), 12+ (doze anos ou mais), 14+ (catorze anos ou mais), 16+ (dezesseis anos ou mais),
18+ (dezoito anos ou mais). **Objetivos de aprendizado:** Implementar uma estrutura de classificação com múltiplas categorias.
**Dica:** Use códigos numéricos para representar cada classificação e converter para o texto correspondente.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

const y1 = input("Informe a faixa etária: ");
const idade = Number(y1);

const filmeLivre = idade < 10
const filmeMaior10 = idade >= 10 && idade < 12;
const filmeMaior12 = idade >= 12 && idade < 14;
const filmeMaior14 = idade >= 14 && idade < 16;
const filmeMaior16 = idade >= 16 && idade < 18;

if (filmeLivre) {
    console.log("Este filme é destinado a todas as idades")
} else if (filmeMaior10) {
    console.log("Este filme é recomendado para maiores de 10 anos.")
} else if (filmeMaior12) {
    console.log("Este filme é recomendado para maiores de 12 anos.")
} else if(filmeMaior14) {
    console.log("Este filme é recomendado para maiores de 14 anos.")
} else if(filmeMaior16) {
    console.log("Este filme é recomendado para maiores de 16 anos.")
} else {
    console.log("Este filme é recomendado para maiores de 18 anos.")
};
