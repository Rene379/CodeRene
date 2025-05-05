/* 
21. Sistema de Aprovação Escolar
Crie um programa que recebe duas notas de um aluno, calcula a média e determina se ele foi aprovado (média ≥ 7), 
está em recuperação (5 ≤ média < 7) ou foi reprovado (média < 5). 
**Objetivos de aprendizado:** Realizar cálculos e aplicar estruturas condicionais com base no resultado. 
**Dica:** Verifique se as notas estão dentro do intervalo válido (0-10) antes de calcular a média. 
*/


function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};


let nota01 = input ("Digite a primeira nota ");
let nota1 = Number(nota01);
let nota02 = input("Digite a segunda nota ");
let nota2 = Number (nota02);
let mediaFinal = ((nota1 + nota2) / 2);

if (mediaFinal >= 7 && mediaFinal <= 10){
    console.log("Aprovado!")
} else if (mediaFinal >= 5 && mediaFinal < 7){
    console.log("Está de recuperação")
} else {
    console.log("Reprovado")
};