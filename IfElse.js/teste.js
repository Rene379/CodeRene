/* 01#
Descrição: Escreva um programa que calcula o imposto a ser pago com base no salário,
seguindo as alíquotas: até R$1903,98 (isento), de R$1903,99 até R$2826,65 (7,5%),
de R$2826,66 até R$3751,05 (15%), de R$3751,06 até R$4664,68 (22,5%),
acima de R$4664,68 (27,5%).
*/


function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

/*
const s1 = input("Informe o salário: ")
const salario = Number(s1);


if (salario <= 1903.98) {
    console.log("A alíquota de IR deste salário é isenta.")
} else if (salario > 1903.98 && salario <= 2826.65) {
    console.log(`A alíquota de IR deste salário é igual a: ${(salario * 0.075).toFixed(2)}`)
} else if (salario > 2826.65 && salario <= 3751.05) {
    console.log(`A alíquota de IR deste salário é igual a: ${(salario * 0.15).toFixed(2)}`)
} else if (salario > 3751.05 && salario <= 4664.68) {
    console.log(`A alíquota de IR deste salário é igual a: ${(salario * 0.225).toFixed(2)}`)
} else {
    console.log(`A alíquota de IR deste salário é igual a: ${(salario * 0.275).toFixed(2)}`)
};
*/

/* 02#
O valor do ingresso depende da idade da pessoa e do horário da sessão:
até 12 anos = RR$ 10,00
60 anos = R$ 15,00
Adulto (acima de 12) = R$ 30,00 após as 17h ou R$ 20,00, se for antes das 17h.
*/

const y1 = input ("Informe a idade: ");
const idadePessoa = Number (y1); 
const h1 = input ("Informe o horário da sessão: ");
const horaSessao = Number (h1);

const crianca = idadePessoa <= 12;
const adulto = idadePessoa > 12 && idadePessoa < 60;
const idoso = idadePessoa >= 60;
const manha = horaSessao >=0 && horaSessao <= 12;
const tarde = horaSessao > 12 && horaSessao <= 17;
const apos17h = horaSessao > 17 && horaSessao < 24; 

if (crianca) {
    console.log ("O valor da entrada é de R$ 10,00.")
} else if (adulto && manha || tarde) {
    console.log ("O valor da entrada é de R$ 20,00")
} else if (adulto && apos17h) {
    console.log ("O valor da entrada é de R$ 30,00")
} else if (idoso) {
    console.log ("O valor da entrada é de R$ 15,00")
} else {
    console.log("obrigado pela prefência")
};


