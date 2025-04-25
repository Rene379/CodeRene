/* ### 35. Sistema de Rodízio com Desconto por Idade
**Descrição:** Escreva um programa que calcula o valor de um rodízio com base na idade dos clientes:
crianças até 5 anos não pagam, de 6 a 12 anos pagam R$20, de 13 a 59 anos pagam R$45, e pessoas com 60 anos ou mais pagam R$35.
**Objetivos de aprendizado:** Implementar lógica condicional para precificação variável.
**Dica:** Adicione a funcionalidade para calcular o valor total para um grupo de pessoas.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

const a1 = input("Informe a idade: ");
const idade = Number(a1);

if (idade <= 5) {
    console.log("Não pagará o rodízio.")
} else if (idade > 6 && idade <= 12) {
    console.log("O valor do rodízio é de R$ 20,00.")
} else if  (idade > 13  && idade <= 59) {
    console.log("O valor do rodízio é de R$ 45,00.")
} else {
    console.log("O valor do rodízio é de R$ 35,00.")
};
