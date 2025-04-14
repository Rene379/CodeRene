function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};


let nota1 = input ("Digite a primeira nota ");
let nota01 = Number(nota1);
let nota2 = input("Digite a segunda nota ");
let nota02 = Number (nota2);
let med = ((nota01 + nota02) / 2);


if (med === 10) {
    console.log ("Aprovado com Distinção! Parabéns!")
} else if (med >= 7) {
    console.log ("Aprovado!")
} else {
    console.log ("Reprovado. Na próxima você consegue!")
};