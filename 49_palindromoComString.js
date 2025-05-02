/*
### 49. Verificação de Palíndromo em String
**Descrição:** Crie um programa que verifica se uma string é um palíndromo, ignorando espaços e pontuação.
Um palíndromo é uma palavra ou frase que se lê da mesma forma de trás para frente. Exemplos: "Ana", "A sacada da casa", "Após a sopa".
**Objetivos de aprendizado:** Trabalhar com manipulação de strings e estruturas condicionais.
**Dica:** Remova espaços e pontuação, converta tudo para minúsculas antes de fazer a verificação.
*/

const { isDate } = require('util/types');

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};


const w1 = input("Digite a palavra: ")
const palavra = (w1);
const palavraSemEspaco = palavra.split(" ").join("");
const palavraInvertida = palavraSemEspaco.split("").reverse().join("");

if (palavraSemEspaco.toLowerCase() == palavraInvertida.toLowerCase()) {
    console.log("É palíndromo")
} else {
    console.log("Não é palíndromo")
};
