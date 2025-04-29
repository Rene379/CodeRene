/*
### 29. Verificação de Ponto em Círculo
**Descrição:** Crie um programa que verifica se um ponto (x,y) está dentro, fora ou na borda de um círculo com centro (0,0) e raio 5.
**Objetivos de aprendizado:** Aplicar conceitos matemáticos (distância entre pontos) em estruturas condicionais.
**Dica:** Use o teorema de Pitágoras para calcular a distância do ponto até o centro do círculo.
*/

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

const pX = input("Informe o ponto X: ");
const pontoX = Number(pX);
const pY = input("Informe o ponto Y: ");
const pontoY = Number(pY);
const raio = Number(5);

if (pontoX **2 + pontoY **2 > raio ** 2) {
    console.log("O ponto está fora do círculo.")
} else if (pontoX **2 + pontoY **2 < raio ** 2) {
    console.log("O ponto está dentro do círculo.")
} else {
    console.log("O ponto está na borda do círculo")
};

