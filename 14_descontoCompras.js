/* ### 14. Cálculo de Desconto em Compras
**Descrição:** Desenvolva um programa que calcula o desconto em uma compra baseado no valor total: 0% para compras até R$100, 
10% para compras entre R$100 e R$500, e 15% para compras acima de R$500. 
**Objetivos de aprendizado:
** Aplicar condições para cálculos financeiros. **Dica:** Calcule não apenas a porcentagem de desconto, mas também o valor final após o desconto.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};


let price = input("Informe o preço: ");
let preco = Number (price);


if (preco > 500){
    console.log(` o valor do produto com desconto é de R$ ${preco - (preco * 0.15).toFixed(2)}`)
} else if (preco > 100 && preco <= 500){
    console.log(` o valor do produto com desconto é de R$ ${preco - (preco * 0.10).toFixed(2)}`)
} else {
    console.log("O produto não tem desconto")
};