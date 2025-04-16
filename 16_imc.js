/*
### 16. Classificação de IMC
**Descrição:** Faça um programa que calcula o Índice de Massa Corporal (IMC = peso / altura²) e classifica a pessoa como: 
Abaixo do peso (IMC < 18.5), Peso normal (18.5 ≤ IMC < 25), Sobrepeso (25 ≤ IMC < 30), Obesidade (IMC ≥ 30).
**Objetivos de aprendizado:** Aplicar fórmulas matemáticas e classificar resultados com estruturas condicionais.
**Dica:** Confirme que a altura está em metros antes de calcular o IMC.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};



let peso = input("Informe o peso: ");
let altura = input("Informe a altura: ");
let medidas = (peso/(altura*altura).toFixed(2));
let imc = Number(medidas);

if (imc < 18.5) {
    console.log("Abaixo do peso")
} else if (imc >= 18.5 && imc < 25) {
    console.log("Peso normal")
} else if (imc >= 25 && imc < 30) {
    console.log("Sobrepeso")
} else{
    console.log("Obesidade")
}; 



