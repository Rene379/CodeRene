/*
### 26. Validação de Data
**Descrição:** Desenvolva um programa que recebe dia, mês e ano e verifica se formam uma data válida,
considerando a quantidade de dias em cada mês e anos bissextos. **Objetivos de aprendizado:
** Aplicar lógica complexa com múltiplas condições interdependentes. 
**Dica:** Verifique os limites para dias (1-31), meses (1-12) e considere que fevereiro tem 29 dias em anos bissextos.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

let day = input ("informe o dia: ")
let dia = Number (day) 
let month = input ("Informe o mês: ")
let mes = Number (month)
let year = input("Informe o ano: ")
let ano = Number (year)


if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12 && (dia >= 1 && dia <= 31)) {
    console.log(`1 Hoje é ${dia}/${mes}/${ano}`)
} else if (mes == 4 || mes == 6 || mes == 9 || mes == 11 && (dia >= 1 && dia <= 30)) {
    console.log(`2 Hoje é ${dia}/${mes}/${ano}`)
} else if (mes == 2 && (dia >= 1 && dia <= 28)) {
    console.log (`3 Hoje é ${dia}/${mes}/${ano}`)
} else if (ano % 4 == 0 && ano % 100 !== 0 || ano % 400 == 0 && mes == 2 && (dia >= 1 && dia <= 29)) {
    console.log (`4 Hoje é ${dia}/${mes}/${ano}`)
} else {
    console.log ("Data inválida")
}

