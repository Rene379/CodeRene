/*
### 34. Verificação de Aposentadoria
**Descrição:** Desenvolva um programa que verifica se uma pessoa pode se aposentar com base na idade e tempo de contribuição.
Homens: 65 anos de idade ou 35 de contribuição. Mulheres: 62 anos de idade ou 30 de contribuição.
**Objetivos de aprendizado:** Combinar múltiplas variáveis com operadores lógicos. **Dica:** Solicite o gênero do usuário para aplicar as regras corretas.
###
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

const a1 = input("Informe a idade: ");
const idade = Number(a1);
const c1 = input("informe o tempo de contribuição:");
const contribuição = Number(c1);
const gen = input ("Informe o gênero: ")
const genero = (gen)

if (genero == "Mulher" && idade >= 62 && contribuição >= 30) {
    console.log ("Poderá se aposentar.")
} else if (genero == "Homem" && idade >= 65 && contribuição >= 35) {
    console.log("Poderá se aposentar.")
} else {
    console.log("Não poderá se aposentar, que pena.")
};