/* 
### 25. Sistema de Pagamento com Desconto
**Descrição:** Crie um programa que calcula o preço final de um produto com base em condições de pagamento: à vista (10% de desconto),
cartão de débito (5% de desconto), cartão de crédito em até 3x (preço normal), cartão de crédito em mais de 3x (5% de acréscimo).
**Objetivos de aprendizado:** Aplicar estruturas condicionais em um cenário de e-commerce.
**Dica:** Utilize um código para identificar cada forma de pagamento (ex: 1 = à vista, 2 = débito).
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

let c1 = input("Informe a condição de pagamento: ");
let condicao = String(c1);
let p1 = input("Informe o preco: ");
let price = Number(p1).toFixed(2);

const aVista = ((price * 0.90).toFixed(2));
const debito = ((price * 0.95).toFixed(2));
const creditoAte3x = price
const creditoMais3x = ((price * 1.05).toFixed(2));

if (condicao == "a vista") {
    console.log(`O valor é de R$: ${aVista}`)
} else if (condicao == "debito") {
    console.log(`O valor é de R$: ${debito}`)
} else if (condicao == "creditoate3x") {
    console.log(`O valor é de R$: ${creditoAte3x}`)
} else if (condicao == "credito+3x") {
    console.log(`O valor é de R$: ${creditoMais3x}`)
} else {
    console.log("Obrigado pela preferência")
}; 
