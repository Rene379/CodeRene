/*
### 27. Validação de Senha
**Descrição:** Escreva um programa que verifica se uma senha atende aos requisitos mínimos de segurança:
pelo menos 8 caracteres, contendo pelo menos uma letra maiúscula, uma letra minúscula e um número.
**Objetivos de aprendizado:** Trabalhar com verificações de strings e caracteres.
**Dica:** Utilize funções para verificar se um caractere é maiúsculo, minúsculo ou um dígito.
###
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};


const password = input("Digite a senha:  ");
const senha = String(password);

const digito = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const maiuscula = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const minuscula = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const tem8Carac = senha.length >= 8;
let temDigito;
let temMaiuscula;
let temMinuscula;

for (const caractere of senha) {
    if (digito.includes(caractere)) {
        temDigito = true
        continue
    }
    if (maiuscula.includes(caractere)) {
        temMaiuscula = true
        continue
    }
    if (minuscula.includes(caractere)) {
        temMinuscula = true
        continue
    }
}

if (tem8Carac && temDigito && temMaiuscula && temMinuscula) {
    console.log("Senha cadastrada com sucesso!")
} else {
    console.log("Senha inválida. Tente novamente.")
};



