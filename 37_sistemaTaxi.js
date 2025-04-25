/*### 37. Sistema de Táxi
**Descrição:** Crie um programa que calcula o valor de uma corrida de táxi com base na distância (km) e horário:
bandeira 1 (diurno, 6h-22h) com tarifa de R$3,50/km + R$5,00 fixo, bandeira 2 (noturno, 22h-6h) com tarifa de R$4,20/km + R$5,00 fixo.
**Objetivos de aprendizado:** Aplicar lógica condicional em um cenário de transporte.
**Dica:** Utilize um código para a bandeira (1 ou 2) ou solicite a hora atual para determinar automaticamente.
*/


function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

const km1 = input("Informe o tamanho da viagem (em Km): ");
const kmViagem = Number(km1);
const hora = input("Informe o horário: ");
const horaViagem = Number(hora);
const horarioDiurno = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
const horarioNoturno = [22, 23, 0, 1, 2, 3, 4, 5]
const bandeira1 = ((3.5 * kmViagem) + 5).toFixed(2)
const bandeira2 = ((4.2 * kmViagem) + 5).toFixed(2)

if (horarioDiurno.includes(horaViagem)) {
    console.log(`O preço da viagem é de R$ ${bandeira1}.`)
} else if (horarioNoturno.includes(horaViagem)) {
    console.log(`O preço da viagem é de R$ ${bandeira2}`)
} else {
    console.log('fim')
};