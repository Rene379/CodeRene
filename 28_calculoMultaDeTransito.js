/*
### 28. Cálculo de Multa de Trânsito
**Descrição:** Faça um programa que calcula o valor de uma multa de trânsito com base na velocidade. 
Se a velocidade for até 20% acima do limite, a multa é de R$130. Se for mais de 20% e até 50% acima, a multa é de R$195.
Se for mais de 50% acima, a multa é de R$880. **Objetivos de aprendizado:
** Aplicar lógica percentual em estruturas condicionais. **Dica:** Calcule a porcentagem de excesso em relação ao limite antes de verificar as condições.
*/


function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

const l1 = input("Informe o limite (km/h): ");
let limite = Number(l1);

const v1 = input("Informe a velocidade (km/h): ");
const velocidade = Number(v1);


limite == velocidade;
const acimaLimiteAte20 = velocidade > limite && velocidade <= (limite * 1.20);
const acimaLimiteMaisde20Ate50 = velocidade > acimaLimiteAte20 && velocidade <= (limite * 1.50);


if (velocidade <= limite) {
    console.log("Continue assim")
} else if (acimaLimiteAte20) {
    console.log("A multa é de R$ 130,00")
} else if (acimaLimiteMaisde20Ate50){
    console.log("A multa é de R$ 195,00")
} else {
    console.log("A multa é de R$ 880,00.")
};


