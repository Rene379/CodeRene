/* 
### 19. Cálculo de Imposto de Renda
**Descrição:** Escreva um programa que calcula o imposto a ser pago com base no salário, seguindo as alíquotas: 
até R$1903,98 (isento), de R$1903,99 até R$2826,65 (7,5%), de R$2826,66 até R$3751,05 (15%), de R$3751,06 até R$4664,68 (22,5%),
acima de R$4664,68 (27,5%). **Objetivos de aprendizado:** Aplicar estruturas condicionais em um contexto financeiro real. 
**Dica:** Lembre-se que essas alíquotas são aplicadas apenas sobre a parcela do salário dentro de cada faixa.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

let rec = input("Informe o salario: ");
let salario = Number (rec);


if (salario  <= 1903.98){
    console.log(` Isento de IR`)
} else if (salario >= 1903.99  && salario <= 2826.65){
    console.log(` A alíquota é de R$ ${(salario * 0.075).toFixed(2)}`)
} else if (salario >= 2826.66  && salario <= 3751.05){
    console.log(` A alíquota é de R$ ${(salario * 0.15).toFixed(2)}`)
} else if (salario >= 3751.06  && salario <= 4664.68){
    console.log(` A alíquota é de R$ ${(salario * 0.225).toFixed(2)}`)
} else {
    console.log(` A alíquota é de R$ ${(salario * 0.275).toFixed(2)}`)
};


