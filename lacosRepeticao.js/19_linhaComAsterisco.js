/*
**Exercício 19:** Crie um programa que desenhe uma linha com 20 asteriscos.
*/



function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};



let linha = ""


for(i = linha ; i <= 20; i++) {
     linha += "*"
};
console.log(linha); 


