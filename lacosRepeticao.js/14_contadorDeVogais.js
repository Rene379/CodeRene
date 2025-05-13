/*
**Exercício 14:** Crie um programa que conte quantas vogais existem em uma palavra.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};


const w1 = input("Digite a palavra: ")
let palavra = w1;

palavra = palavra.toLowerCase();
let numeroVogais = 0;


for (let i = 0; i < palavra.length; i++) {
    if (palavra.charAt(i)== "a" || palavra.charAt(i)== "e" || palavra.charAt(i)== "i" || palavra.charAt(i)== "o" || palavra.charAt(i)== "u") {
        numeroVogais++
    }
    
};
console.log (`A palavra ${palavra} tem ${numeroVogais} vogais.`)

