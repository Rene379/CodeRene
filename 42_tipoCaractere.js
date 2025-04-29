/*
### 42. Identificação de Tipo de Caractere
**Descrição:** Desenvolva um programa que determina o tipo de um caractere: letra maiúscula, letra minúscula, dígito numérico ou caractere especial.
**Objetivos de aprendizado:** Trabalhar com códigos ASCII e condições para intervalos de caracteres.
**Dica:** Você pode usar o código ASCII do caractere ou funções específicas da linguagem para verificar o tipo.
###
*/

const { isDate } = require('util/types');

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

const carac = input("Insira o caractere: ");
const caractere = carac;

const maiúscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const minúscula = "abcdefghijklmnopqrstuvwxyz"
const numero = "0123456789"

if (numero.includes(caractere))  {
    console.log("Este caractere é um número")
} else if (maiúscula.includes(caractere)) {
    console.log("Este caractere é uma letra maíuscula.")
} else if (minúscula.includes(caractere)) {
    console.log("Este caractere é uma letra minúscula.")
} else {
    console.log("Este caractere é especial.")
};

