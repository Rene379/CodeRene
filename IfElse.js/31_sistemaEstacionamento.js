/*
### 31. Sistema de Estacionamento
**Descrição:** Escreva um programa que calcula o valor a ser pago por um estacionamento com base no tempo:
primeira hora R$10, horas adicionais R$5 cada,com um valor máximo de R$30 por dia.
**Objetivos de aprendizado:** Aplicar lógica condicional em um cenário do mundo real.
**Dica:** Verifique se o valor ultrapassa o máximo diário antes de retornar o resultado.
*/

const { isDate } = require('util/types');

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};


const h1 = input("Hora de entrada: ")
const horaEntrada = Number(h1)
const h2 = input("Hora de saida: ")
const horaSaida = Number(h2)
const periodo = (horaSaida - horaEntrada)

if (periodo <= 1) {
    console.log("Valor total de R$ 10,00")
} else if (periodo >1 && periodo <=2){
    console.log("Valor total de R$ 15,00")
} else if (periodo >2 && periodo <=3) {
    console.log("Valor total de R$ 20,00")
} else if (periodo >3 && periodo <=4){
    console.log("Valor total de R$ 25,00")
} else {
    console.log("Valor total de R$ 30,00")
};


