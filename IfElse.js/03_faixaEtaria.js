/* ### 3. Verificação de Maioridade
**Descrição:** Crie um programa que solicita a idade de uma pessoa e informa se ela é maior de idade (18 anos ou mais) ou menor de idade. 
**Objetivos de aprendizado:** Implementar condições simples com valores limites. 
**Dica:** Pergunte ao usuário o país de origem para adicionar complexidade, já que a maioridade varia entre países. */

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

let age = input("Informe a faixa etária: ");
let faixaEtaria = Number(age);

if (faixaEtaria >= 18){
    console.log("Você é maior de idade")
} else {
    console.log("Você é menor de idade")
}; 