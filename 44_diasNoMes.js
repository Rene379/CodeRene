/*
### 44. Cálculo de Dias no Mês
**Descrição:** Faça um programa que calcula o número de dias em um mês, considerando anos bissextos para fevereiro.
**Objetivos de aprendizado:** Combinar verificações de meses com a lógica de anos bissextos.
**Dica:** Meses com 31 dias: 1, 3, 5, 7, 8, 10, 12. Meses com 30 dias: 4, 6, 9, 11. Fevereiro: 28 dias (29 em anos bissextos).
*/

const { isDate } = require('util/types');

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

const qDays = input("Informe o mês: ");
const numeroMes = Number(qDays);
const year = input("Informe o ano: ")
const ano = Number (year)

const mes31Dias = [1,  3, 5, 7, 8, 10, 12];
const mes30Dias = [4, 6, 9, 11];
const fevereiro = Number (2);

if (mes31Dias.includes(numeroMes)) {
    console.log("Este mês tem 31 dias.")
} else if (mes30Dias.includes(numeroMes)) {
    console.log("Este mẽs tem 30 dias.")
} else if (numeroMes == fevereiro && (ano % 4 == 0 && ano % 100 !== 0 || ano % 400 == 0)) {
    console.log("Este mês tem 29 dias.")
} else if (numeroMes == fevereiro) {
    console.log("Este mês tem 28 dias.")
} else {
    return
}; 


