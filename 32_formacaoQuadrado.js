/*
### 32. Verificação de Formação de Quadrado
**Descrição:** Faça um programa que determina se quatro valores informados podem ser os lados de um quadrado.
Um quadrado tem todos os lados iguais. **Objetivos de aprendizado:** Aplicar verificações de igualdade em múltiplos valores.
**Dica:** Verifique não apenas se todos os lados são iguais, mas também se são maiores que zero.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

const s1 = input("Informe o primeiro lado: ");
const side1 = Number(s1);
const s2 = input("Informe o segundo lado: ");
const side2 = Number(s2);
const s3 = input("Informe o terceiro lado: ");
const side3 = Number(s3);
const s4 = input("Informe o quarto lado: ");
const side4 = Number(s4);
const allSides = (side1 == side2 && side1 == side3 && side1 == side4 && side2 == side3 && side2 == side4 && side3 == side4)
 

if (side1 > 0 && side2 > 0 && side3 > 0 && side4 > 0 && allSides == true) {
    console.log("Os lados formam um quadrado")
} else {
    console.log("Este não é um quadrado")
};
