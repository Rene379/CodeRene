/*
### 40. Verificação de Elegibilidade para Voto
**Descrição:** Faça um programa que verifica se uma pessoa pode votar com base na sua idade e nacionalidade.
No Brasil, o voto é: obrigatório para brasileiros entre 18 e 70 anos, facultativo para brasileiros entre 16 e 17 anos e acima de 70 anos,
e não permitido para menores de 16 anos e estrangeiros. **Objetivos de aprendizado:** Combinar múltiplas variáveis com operadores lógicos.
**Dica:** Verifique primeiro a nacionalidade antes de aplicar as regras de idade.
##
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

const a1 = input("Informe a idade: ");
const idade = Number(a1);
const n1 = input("Nacionalidade: ");
const nacionalidade = String(n1);

if (idade <16 && nacionalidade == "Estrangeiro") {
    console.log("Desculpe, mas não poderá votar.")
} else if (idade >=16 && idade < 18 && nacionalidade == "Brasileiro"|| idade > 70 && nacionalidade == "Brasileiro") {
    console.log ("Seu voto é facultaivo.")
} else if (idade >= 18 && idade <= 70 && nacionalidade == "Brasileiro") {
    console.log("Seu voto é obrigatório")
} else {
    console.log("Desculpe, mas não poderá votar.")
};