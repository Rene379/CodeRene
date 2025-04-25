/*
### 39. Sistema de Desconto por Quantidade
**Descrição:** Escreva um programa que determina o valor a ser pago em uma loja com base na quantidade de itens comprados:
1 item (sem desconto), 2-5 itens (5% de desconto), 6-10 itens (10% de desconto), mais de 10 itens (15% de desconto).
**Objetivos de aprendizado:** Aplicar estruturas condicionais em um cenário de vendas.
**Dica:** Multiplique a quantidade pelo preço unitário antes de aplicar o desconto.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

const pu = input ("informe o preço: ")
const precoUnitario = Number(pu).toFixed(2);
const q1 = input("Informe a quantidade: ");
const quantidadeItens = Number(q1);


if (quantidadeItens <=1){
    console.log(`Valor de: R$ ${precoUnitario}`)
} else if (quantidadeItens >= 2 && quantidadeItens <= 5) {
    console.log(`Valor com desconto de 5%: R$ ${((precoUnitario * 0.95) * quantidadeItens).toFixed(2)}`)
} else if (quantidadeItens >= 6 && quantidadeItens <= 10) {
    console.log(`Valor com desconto de 10%: R$ ${((precoUnitario * 0.90) * quantidadeItens).toFixed(2)}`)
} else {
    console.log(`Valor com desconto de 15%: R$ ${((precoUnitario * 0.85) * quantidadeItens).toFixed(2)}`)
};