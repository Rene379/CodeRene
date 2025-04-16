/* ### 17. Verificação de Existência de Triângulo
**Descrição:** Crie um programa que verifica se três valores podem formar um triângulo.
Para isso, a soma de dois lados deve ser maior que o terceiro lado para todas as combinações de lados. **Objetivos de aprendizado:
** Combinar múltiplas condições com operadores lógicos. 
**Dica:** Você precisa verificar três condições: a + b > c, a + c > b, e b + c > a.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

let s1 = input("Informe o primeiro lado: ");
let l1 = Number(s1);
let s2 = input("Informe o segundo lado: ");
let l2 = Number(s2);
let s3 = input("Informe o terceiro lado: ");
let l3 = Number(s3);

if (l1 + l2 > l3 || l1 + l3 > l2 || l2 + l3 > l1) {
    console.log("O triângulo existe")
}else {
    console.log("Não existe triânglo")
}

