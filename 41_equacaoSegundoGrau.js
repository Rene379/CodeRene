/*
### 41. Resolução de Equação de Segundo Grau
**Descrição:** Crie um programa que resolve uma equação de segundo grau (ax² + bx + c = 0) usando a fórmula de Bhaskara.
O programa deve identificar quando a equação não tem raízes reais (delta < 0), tem uma raiz real (delta = 0) ou tem duas raízes reais (delta > 0).
**Objetivos de aprendizado:** Aplicar fórmulas matemáticas complexas com estruturas condicionais.
**Dica:** Calcule o discriminante delta = b² - 4ac primeiro, e depois use-o para determinar as raízes.
*/

const { isDate } = require('util/types');

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

const numA = input("Insira A: ");
const a = Number(numA);
const numB = input("Insira B: ");
const b = Number(numB);
const numC = input("Insira C: ");
const c = Number(numC);
const delta = ((b**2) - 4*a*c);
console.log(delta)
const bhask1 = ((-b + Math.sqrt(delta)) / 2 * a).toFixed(2);
console.log(bhask1)
const bhask2= ((-b - Math.sqrt(delta)) / 2 * a).toFixed(2);
console.log(bhask2)

if (delta < 0) {
    console.log ("Não tem raízes reais.")
} else if (delta == 0) {
    console.log (`A raiz real é ${bhask1 || bhask2}`)
} else {
    console.log (`As raízes reais são: ${bhask1} e ${bhask2} `)
};
 